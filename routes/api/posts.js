const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Post = require('../../models/Post');

const cloudinary = require('../../config/cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Devmeet',     
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  }
});

const parser = multer({ storage: storage });

//@orute     POST api/post
// @desc     Create a post
// @access   Private
router.post('/', parser.single('image'), [ auth, [
  check('text', 'Text is required').not().isEmpty(),
  ],
], 
  async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
try {

    const user = await User.findById(req.user.id).select('-password');

    
    if(req.file) {
const images = await  cloudinary.uploader.upload(req.file.path)
// console.log('req.file :', req.file);


const newPost = new Post ({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
      imageUrl: images.url,
    });
  

     const post = await newPost.save();

     res.json(post)
    }   

    if(!req.file) {

      const newPost = new Post ({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();

      res.json(post)
    }
 
  } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
      }
});

//@orute     GET api/post
// @desc    Get all posts
// @access   Private

router.get('/', auth, async (req, res) => {

  try {

    const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
    const skip = parseInt(req.query.skip);
    const posts = await Post.find().sort({ date: -1 }).skip(skip).limit(limit)

    res.json(posts)
  } catch (err) {
    console.error(err.message)
        res.status(500).send('Server Error')
  }
});

//@orute     GET api/posts/:id
// @desc    Get post by id
// @access   Private

router.get('/:id', auth, async (req, res) => {

  try {
    const post = await Post.findById(req.params.id);

    if(!post) {
      return res.status(404).json({ msg: 'Post not found' })
    }
    res.json(post)
  } catch (err) {
    console.error(err.message);
    if(err.name ==='CastError') {
      return res.status(404).json({ msg: 'Post not found' })
    }
        res.status(500).send('Server Error')
  }
});


//@orute     DELETE api/postS/:id
// @desc    Delete a post
// @access   Private

router.delete('/:id', auth, async (req, res) => {

  try {
    const post = await Post.findById(req.params.id)

    if(!post) {
      return res.status(404).json({ msg: 'Post not found' })
    }

    //Check user
    if(post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
      await post.remove()
    
    res.json({  msg: 'Post Removed'})
  } catch (err) {
    console.error(err.message)
    if(err.name ==='CastError') {
      return res.status(404).json({ msg: 'Post not found' })
    }
        res.status(500).send('Server Error')
  }
});


//@orute     PUT api/posts/like/:id
// @desc    Like a post
// @access   Private

router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //Check if post already been liked by user

    if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0){
      return res.status(400).json({ msg:'Post already liked'  })
  }

  post.likes.unshift({  user: req.user.id});

  await post.save();
  
  res.json(post.likes);
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error');
  }
});


//@orute     PUT api/posts/unlike/:id
// @desc    Unlike a post
// @access   Private

router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //Check if post already been liked by user

    if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
      return res.status(400).json({ msg:'Post has not yet been liked'  })
  }

  //Get remove index

  const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

  post.likes.splice(removeIndex, 1)

  await post.save();
  
  res.json(post.likes);
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error');
  }
});





//@rouute     POST api/posts/comment/:id
// @desc     Comment on  a post
// @access   Private
router.post('/comment/:id', [ auth, [
  check('text', 'Text is required').not().isEmpty()
  ],
], 
  async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

      try {

    const user = await User.findById(req.user.id).select('-password');

    const post =await Post.findById(req.params.id);

    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    };

     post.comments.unshift(newComment); 
     
     await post.save();

     res.json(post.comments)
      } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
      }
});

//@rouute     POST api/posts/comment/:id/:comment_id
// @desc      Delete Comment on  a post
// @access   Private

router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    
    const post =await Post.findById(req.params.id);

      //Pull comments

      const comment = post.comments.find(comment => comment.id === req.params.comment_id)

      //Make sure comment exists

      if(!comment) {
        return res.status(404).json({ msg:'Comments does not exist'})
      }
    
      //Check user exists

      if(comment.user.toString() !==  req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
     
     //Get remove index
      const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

      post.comments.splice(removeIndex, 1)
    
      await post.save();
      
      res.json(post.comments);
     
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

}); 





module.exports = router;