import React from 'react'
import { PostsPageContainer } from './Posts.styles'
import DevUsers from '../../components/DevUsers/DevUsers'
import DevFeed from '../../components/DevFeed/DevFeed'
import DevGist from '../../components/DevGist/DevGist'



const Posts = () => {
  
  
  return (
    
    <PostsPageContainer>
 
<DevUsers />
<DevGist />
<DevFeed />
    </PostsPageContainer>

  )
}

export default Posts

