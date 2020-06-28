import React  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteComment } from '../../Redux/Post/post.actions';

import {
  CommentI,
  PostContainer,
  UserImg,
  UserDet,
  Name,
  PostText,
  PostDate,
  Lower, 
  LowerC,
  Dl
} from './CommentItem.styles'

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  userP,
  deleteComment
}) => {
  return (
    <CommentI>
    <PostContainer>
      <UserDet>
        <Link to={`/profile/${user}`}>
          <UserImg src={avatar} alt="image"></UserImg>
        </Link>
      </UserDet>

      <Link to={`/profile/${user}`}>
        <Name>{name}</Name>
      </Link>

      <Link to={`/posts/${_id}`}>
        <PostText>{text}</PostText>

        <PostDate>
          <Moment format=" h:mm A • MMMM Do, YYYY">{date}</Moment>
        </PostDate>
      </Link>
    </PostContainer>
     <Lower>
     <LowerC>
     {!userP.loading && user === userP.user._id && ( <Dl title='Delete' onClick= {() => deleteComment(postId,_id)} > 
            </Dl>
           )}
     </LowerC>
      </Lower>
      </CommentI>
  )
}

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  userP: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  userP: state.user,
})

export default connect(mapStateToProps, {deleteComment})(CommentItem)
