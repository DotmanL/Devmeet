import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addPost} from '../../Redux/Post/post.actions'
import {Container, Cover, Header, FormContainer, FormInput, Button} from './DevGistInput.styles'


const DevGistInput = ({addPost}) => {
  const [text,setText] = useState('');
 
 


  return (
  <Container>
    <Cover>
      <Header>Say Something</Header>
    </Cover>
    <form    onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}>
    <FormContainer>
      <FormInput 
      name="text"
      cols="30"
      rows="5"
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder="Create a post"
      required
      />
 <Button type="submit"> Post </Button>
    </FormContainer>

 </form>
  </Container>
 
  )
}

DevGistInput.propTypes = {
addPost: PropTypes.func.isRequired,
}

export default connect(null, {addPost}) (DevGistInput);
