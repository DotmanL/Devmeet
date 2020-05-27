import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import {addLike, removeLike} from '../../Redux/Post/post.actions';

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
  userP,
  post: { _id, name, avatar, user, likes, text, comments, date },
}) => {
  return (
    <Fragment>
      <Post>
      
        <PostContainer>
        <UserDet>
          <UserImg src={avatar} />
       
        </UserDet>
        <Name>{name}</Name>
          <PostText>
          {text}
          </PostText>
         
          <PostDate>
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </PostDate>
          </PostContainer>
          <Lower>
          <LowerC>
      
        <Lk title='like' onClick= {() => addLike(_id)} />{''} {likes.length > 0 && (
            <span style={{'color':'white'}}>{likes.length}</span>
          )} 
          <Dk title='Unlike' onClick= {() => removeLike(_id)} /> 
         
          <Link to={`/post/${_id}`}>          
        <Cm title='Comments'>
          {comments.length > 0 && (
            <span style={{'color':'white'}}>{comments.length}</span>
          )} 
          </Cm>
          </Link>

          {!userP.loading && user === userP.user._id && ( <Dl title='Delete'> 
            </Dl>
           )}
            </LowerC>
            </Lower>
      
      </Post>
    </Fragment>
  )
}

DevGistItem.propTypes = {
  userP: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  userP: state.user,
})

export default connect(mapStateToProps, {addLike, removeLike})(DevGistItem)
