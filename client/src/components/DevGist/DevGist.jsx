import React, {useEffect, useState} from 'react'

import PostNav from '../PostNav/PostNav';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import {getPosts, getMorePosts} from '../../Redux/Post/post.actions';
import DevGistItem from './DevGistItem'
import { Container, Header, Welcome, Posts, Cover } from './DevGist.styles';
import DevGistInput from './DevGistInput';


const DevGist = (

  
  {getPosts, 
    getMorePosts,
    post:{posts, loading}}) => {
  
      const [isFetching, setIsFetching] = useState(false);
      const [limit, setLimit] = useState(10);
      const [skip, setSkip] = useState(0);
     const [hasReached, setHasReached] = useState(false)


      useEffect(() =>{
        if (posts.length === 0){
          getPosts(limit)
        } else {

  
        // const {innerHeight} = window;
        // const {documentElement} = document;
      
          
      window.onscroll = () => {
        if (
          (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 580 ) &&
          posts.length
        ) {
       setIsFetching(true)
       setHasReached(false)
        console.log('fetch more items');
        setLimit(10)
      let toSkip = skip + limit
      setSkip(toSkip)
        getMorePosts(toSkip)
        
      }
      }
    }
  
  })

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
      {!isFetching && !hasReached && (<Spinner/>)} 
    </Container>
    )
}



DevGist.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getMorePosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, {getPosts, getMorePosts}) (DevGist);