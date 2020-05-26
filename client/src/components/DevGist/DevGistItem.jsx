import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import {
  Post,
  UserImg,
  Name,
  PostContainer,
  UserDet,
  PostText,
  PostDate,
  LikeB,
  UnlikeB,
  DiscB,
  DelB,
  LowerC,
  Lk,
  Dk,
  Cm,
  Dl
} from './DevGistItem.styles'

const DevGistItem = ({
  userP,
  post: { _id, name, avatar, user, likes, text, comments, date },
}) => {
  return (
    <Fragment>
      <Post>
        <UserDet>
          <UserImg src={avatar} />
       
        </UserDet>
        <PostContainer>
        <Name>{name}</Name>
          <PostText>
          {text}
          </PostText>
          <PostDate>
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </PostDate>
          <LowerC>
          <LikeB> <Lk title='like' /> {likes.length}</LikeB>
          <UnlikeB> <Dk title='Unlike' /> </UnlikeB>
          <DiscB><Cm title='Comments'> {comments.length}</Cm></DiscB>
          {!userP.loading && user === userP.user._id && (<DelB> <Dl title='Delete' /> 

            </DelB>)}
            </LowerC>
        </PostContainer>
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

export default connect(mapStateToProps, {})(DevGistItem)
