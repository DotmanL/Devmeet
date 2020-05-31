import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import {addLike, removeLike, deletePost} from '../../Redux/Post/post.actions';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import GistInput from '../Gist/GistInput';
import {
  Post,
  UserImg,
  Name,
  PostContainer,
  UserDet,
  PostText,
  PostDate,
  Lower,
  LowerC,
  Lk,
  Dk,
  Cm,
  Dl,
  Pc,
  Mb,
  Cms,
  ModalC,
  ModalU, 
  ModalImg,
  ModalN,
  ModalT,
  ModalD,
  ModalClose
} from './DevGistItem.styles'

import './CmModal.css'




const DevGistItem = ({
  addLike,
  removeLike,
  deletePost,
  userP,
  post: { _id, name, avatar, user, likes, text, comments, date, },
  showActions
}) => {

  const [open, setOpen] = useState(false)

  const onOpenModal = () => {
    setOpen(true);
  };
 
 const  onCloseModal = () => {
    setOpen(false);
  };

 
  return (
    <Fragment>
      <Post>
     
        <PostContainer>
       
        <UserDet>
        <Link to={`/profile/${user}`}>
          <UserImg src={avatar}>
            </UserImg>
            </Link>
        </UserDet>

        <Link to={`/profile/${user}`}>
        <Name>{name}</Name>
        </Link>
        
        <Link to={`/posts/${_id}`}>
          <PostText>
          {text}
          </PostText>
         
          <PostDate>
            <Moment format=" h:mm A ~ MMMM Do, YYYY">{date}</Moment>
          </PostDate>
          </Link>
          </PostContainer>
          
          {showActions && (<Fragment>
            <Lower>
          <LowerC>
         
           <Pc>    
        <Cm title='Comments' onClick={onOpenModal}/> {''} {comments.length > 0 && (
            <Cms>{comments.length}</Cms>
          )} 
          
          
        <Lk title='like' onClick= {() => addLike(_id)} />{''} {likes.length > 0 && (
            <span style={{'color':'white'}}>{likes.length}</span>
          )} 
          <Dk title='Unlike' onClick= {() => removeLike(_id)} /> 

          <Modal open={open} onClose={onCloseModal}
            classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
            }}
            >
          <ModalC> 
            <ModalU>
       
          <ModalImg src={avatar}/>          
          </ModalU>

          <ModalN>
          {name}
          </ModalN>

        
          <ModalT>
          {text}
          </ModalT>
          
           <ModalD>
          <Moment format=" h:mm A ~ MMMM Do, YYYY">{date}</Moment>
          </ModalD>
       
         </ModalC>
     

         <GistInput postId={_id} />
        </Modal>
        
        </Pc>
      
         
        <Mb> 
        <Cm title='Comments' onClick={onOpenModal}/> {''} {comments.length > 0 && (
            <Cms>{comments.length}</Cms>
          )} 
          
        <Lk title='like' onClick= {() => addLike(_id)} />{''} {likes.length > 0 && (
            <span style={{'color':'white'}}>{likes.length}</span>
          )} 
          <Dk title='Unlike' onClick= {() => removeLike(_id)} /> 

        </Mb>



          {!userP.loading && user === userP.user._id && ( <Dl title='Delete' onClick= {() => deletePost(_id)} > 
            </Dl>
           )}
            </LowerC>
            </Lower>
            
            </Fragment>)
            }
          
      
      </Post>
    </Fragment>
  )
};

DevGistItem.defaultProps ={
  showActions: true
};

DevGistItem.propTypes = {
  userP: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,

  

}
const mapStateToProps = (state) => ({
  userP: state.user,


  
})

export default connect(mapStateToProps, {addLike, removeLike, deletePost})(DevGistItem)
