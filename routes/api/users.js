const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const User = require('../../models/User')

//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const nodemailer = require('nodemailer')



//@orute     POST api/users
// @desc     Register users
// @access   Public

router.post(
	'/',
  [
  check('name', 'Name is required')
  .not()
  .isEmpty(),
check('email', 'Please include a valid email').isEmail(),
check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],

	async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors:errors.array() });
  }
 

  const {name, email, password} = req.body;

  try {

 // See if users exist

 let user = await User.findOne({ email});
 
 if(user){
  return res.status(400).json({ errors: [ { msg: 'User already exists' }] });
 }
  // Get users gravatar
  const avatar = gravatar.url(email, {
    s: '200',
    r: "pg",
    d: "mm"
  })

  user = new User ({
    name, 
    email,
    avatar,
    password
  })

  // Encrypt Password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  //await user.save();
  // return jsonwebtoken
      
  
  const payload = {
        user: {
          id: user.id
        }
      }
    const token = jwt.sign(
          payload,
          config.get('jwtSecret'), 
          { expiresIn: 360000 }, //change the value to like 3600 which is 1hr, curreent value just for testing
          (err, token) => {
            if(err) throw err;
            res.json({ token })
            console.log(token)
          


    // const token = jwt.sign({ name, email, password },  config.get('jwtSecret'), {
    //   expiresIn: '10m',
    // })
    // console.log(token)

          const transport = {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.THE_EMAIL,
              pass: process.env.thePassword,
            }
          };
          
            const transporter = nodemailer.createTransport(transport);
            transporter.verify((error, success) => {
              if(error) {
                console.error(error)
              } else {
                console.log('users ready to mail myself')
              }
            }); 
  
              const mail = {
                from: process.env.THE_EMAIL,
                to: email,
                subject: `Account activation link`,
                html: `
                <h1> Hello ${name} Please use the following link to activate your account</h1>
                <p>${process.env.CLIENT_URL}/verifyaccount/${token}</p>
                <hr />
                <p>This email may contain sensetive information</p>
                <p>${process.env.CLIENT_URL}</p>
            `, 
              }
          
          transporter.sendMail(mail, (err,data) => {
              if(err) {
                res.json({
                  status: 'failure to send mail'
                })
              } else {
                res.json({
                  status: 'success'
                })
              }
            }) 
          });
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
        }
        }
      )

      module.exports = router





 

