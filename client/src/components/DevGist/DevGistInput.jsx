import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
//import axios from 'axios'
//import ImageUploader from 'react-images-upload';
import {addPost} from '../../Redux/Post/post.actions'
import {Container, Cover, Header, FormContainer, FormInput, PostingB, Button, ButtonDimed} from './DevGistInput.styles'

import ButtonSpin from '../ButtonSpin/ButtonSpin';

const DevGistInput = ({addPost, post:{posting}}) => {
  const [text,setText] = useState('');
  const [image, setImage] = useState({ preview: "", raw: "" });
 

  const handleChange = event => {
    
    setText(event.target.value)

  };

  const handleImage = event => {
        if (event.target.files.length) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0]
      });
        }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData();
    data.append("image", image.raw);
    data.append("text", text)
    addPost(data);  
    setText('');
    setImage('');
    
  }

  

  return (
  <Container>
    <Cover>
      <Header>Say Something</Header>
    </Cover>
    <form onSubmit={handleSubmit} >
    <FormContainer>
      <FormInput 
      name="text"
      cols="30"
      rows="5"
      value={text}
      onChange={handleChange}
      placeholder="Create a post"
      required
      />

       {image.preview ? <img alt ='test' src={image.preview} style={{'width':'50%', 'marginLeft': '50px',}} /> : (
   <>  <h5>Upload your photo</h5>
   </>)}
       <input
        type="file"
        name="image"
        onChange={handleImage}
      />
      
   {text.length === 0 ? (  
 <ButtonDimed disabled type="submit"> Post </ButtonDimed>) : (<Button type="submit"> Post  </Button>)}  
  {posting &&     <PostingB>Posting</PostingB> }
    {posting && (<ButtonSpin />)}
   

 
    </FormContainer>

 </form>
  </Container>
 
  )
}

DevGistInput.propTypes = {
addPost: PropTypes.func.isRequired,
post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  post: state.post,
 
})

export default connect(mapStateToProps, {addPost}) (DevGistInput);
