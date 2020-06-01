import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../Redux/Profile/profile.actions'
import NavBar from '../Navbar/Navbar'
//import {Link} from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  FormContainer,
  SubDetails,
  SmallText,
  FormInput,
  FormInputText,
  FormInputC,
  Bcontainer,
  Button,
  Boptional,
  P
} from './AddEducation.styles'
import { GD } from '../Dashboard/Dashboard.styles';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current,
  } = formData


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormData({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
    })
    addEducation(formData, history)
  }

  return (
    <Fragment>
      <NavBar />
      <Container>
        <FormContainer>
          <Title>Add Your Education</Title>
          <SubTitle>
          <GD />  Add all your Educational Institution you have attended </SubTitle>
          <SubDetails>* - required field </SubDetails>
          <form onSubmit={handleSubmit}>
            <FormInput
           
           type="text"
              placeholder=" * School or Bootcamp"
              name="school"
              value={school}
              onChange={handleChange}
              required
            />

            <FormInput
              type="text"
              placeholder=" *Degree or Certificate"
              name="degree"
              value={degree}
              onChange={handleChange}
              required
            />

            <FormInput
              type="text"
              placeholder=" Field of Study"
              name="fieldofstudy"
              value={fieldofstudy}
              onChange={handleChange}
            />

            <FormInput
              type="date"
              name="from"
              value={from}
              onChange={handleChange}
            />
            <SmallText>From Date</SmallText>

            <P> <FormInputC
                type="checkbox"
                name="current"
                value="current"
                checked={current}
                onChange={(event) => {
                  setFormData({ ...formData, current: !current })
                  toggleDisabled(!toDateDisabled)
                }}
              />{' '}Current School or Bootcamp </P>

            <FormInput
              type="date"
              name="to"
              value={to}
              onChange={handleChange}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
            <SmallText>To Date</SmallText>

            <FormInputText
              placeholder=" Program description"
              name="description"
              cols="30"
              rows="5"
              value={description}
              onChange={handleChange}
            />
            <Bcontainer>
              <Button type="submit"> Submit</Button>
              <Boptional to="/dashboard">Go Back</Boptional>
            </Bcontainer>
          </form>
        </FormContainer>
      </Container>
    </Fragment>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)
