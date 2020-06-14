import React, {useEffect} from 'react'

import PostNav from '../PostNav/PostNav';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import {getPosts} from '../../Redux/Post/post.actions';
import DevGistItem from './DevGistItem'
import { Container, Header, Welcome, Posts, Cover } from './DevGist.styles';
import DevGistInput from './DevGistInput';

const DevGist = (
  {getPosts, 
    post:{posts, loading}}) => {
  
      useEffect(() =>{
    getPosts()
  }, [getPosts])
  
  return  loading ? <Spinner/> :
  (
    <Container>
      <PostNav />
      <Cover>
      <Header>Posts</Header>
      <Welcome>Welcome to the DevMeet</Welcome>
      </Cover>
      <DevGistInput />
      <Posts>
        {posts.map(post => (
          <DevGistItem  key={post._id} post={post}/>
        ))}
      </Posts>

      
         
    </Container>
    )
}



DevGist.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, {getPosts}) (DevGist);
