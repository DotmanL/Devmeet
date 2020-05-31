import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Container, FormContainer, FormInput, Button, CircleC, Line, CoverL} from './GistInput.styles'
import {addComment } from '../../Redux/Post/post.actions';


const GistInput = ({ postId,  user: { user },
  addComment }) => {
  
  const[text, setText]=useState('');

  return (
    <Container>
   <CoverL>
      <Line />
      </CoverL>
  
    <form    
    onSubmit={e => {
          e.preventDefault();
          addComment(postId,{ text });
          setText('');
        }}>
    
    <FormContainer>
     
    <CircleC src={user && user.avatar} /> 

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
user: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  user: state.user,

})

export default connect(mapStateToProps, {addComment}) (GistInput)
