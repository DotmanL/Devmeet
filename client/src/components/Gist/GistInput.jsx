import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Container, Cover, Header, FormContainer, FormInput, Button} from './GistInput.styles'
import {addComment, deleteComment} from '../../Redux/Post/post.actions';
//import CommentItem from './CommentItem';

const GistInput = ({ postId, addComment }) => {
  
  const[text, setText]=useState('');

  return (
    <Container>
    <Cover>

      <Header>Leave a Comment</Header>
      {/* <CommentItem postId  /> */}
    </Cover>
    <form    onSubmit={e => {
          e.preventDefault();
          addComment(postId,{ text });
          setText('');
        }}>
    <FormContainer>
      <FormInput 
      name="text"
      cols="30"
      rows="5"
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder="Leave a comment"
      required
      />
 <Button type="submit"> Post </Button>
    </FormContainer>

 </form>
  </Container>
  )
}

GistInput.propTypes = {
addComment: PropTypes.func.isRequired,
comment: PropTypes.object.isRequired,
}

export default connect(null, {addComment, deleteComment}) (GistInput)
