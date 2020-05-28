import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import {addLike, removeLike, deletePost} from '../../Redux/Post/post.actions';

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
  Dl
} from './DevGistItem.styles'

const DevGistItem = ({

  addLike,
  removeLike,
  deletePost,
  userP,
  post: { _id, name, avatar, user, likes, text, comments, date },
  showActions
}) => {
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
      
        <Lk title='like' onClick= {() => addLike(_id)} />{''} {likes.length > 0 && (
            <span style={{'color':'white'}}>{likes.length}</span>
          )} 
          <Dk title='Unlike' onClick= {() => removeLike(_id)} /> 
         
          <Link to={`/posts/${_id}`}>          
        <Cm title='Comments'>
          {comments.length > 0 && (
            <span style={{'color':'white'}}>{comments.length}</span>
          )} 
          </Cm>
          </Link>

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
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
 
  

}
const mapStateToProps = (state) => ({
  userP: state.user,
  
})

export default connect(mapStateToProps, {addLike, removeLike, deletePost})(DevGistItem)
