import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner  from '../Spinner/Spinner';
import {getPost} from '../../Redux/Post/post.actions'
import DevGistItem from'../DevGist/DevGistItem'
import DevUsers from '../DevUsers/DevUsers';
import DevFeed from '../DevFeed/DevFeed';
import {PostsPageContainer, Container, TopCover, Cover, Header, Ar, Circle} from './Gist.styles'

const Gist = ({ getPost, post:{post, loading}, match }) => {
  useEffect(() => {
   getPost(match.params.id);
  }, [getPost])
  return loading || post === null ? <Spinner /> :
  
    <PostsPageContainer>
     
    <DevUsers />
    
    <Cover> 
      <TopCover>
        <Circle>
        <Link to ='/posts'>
        <Ar />
        </Link>
        </Circle>
        <Header>Post</Header>
        </TopCover>  
    <Container>      
    <DevGistItem post={post} showActions={false} />
    </Container>
    </Cover>

    <DevFeed />
  
    </PostsPageContainer>
}

Gist.propTypes = {
getPost: PropTypes.func.isRequired,
post: PropTypes.object.isRequired,
}
 const mapStateToProps = state => ({
    post: state.post
 })

export default connect(mapStateToProps, {getPost}) (Gist)
