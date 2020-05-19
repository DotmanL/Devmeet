import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Table, Tr } from 'styled-table-component'
import moment from 'moment';
import { Title,  ButtonD } from './Experiences.styles'
import { deleteExperience } from '../../Redux/Profile/profile.actions'


const Experience = ({ experience, deleteExperience }) => {
const experiences = experience.map((exp) => (
  
  
  <Tr active key={exp._id}>
    <td>{exp.company}</td>
    <td>{exp.title}</td>
    <td>
      <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{' '}
      {exp.to === null ? (' Now'
      ) : (
      <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>)}
    </td>
    
    <td>
      <ButtonD onClick={() => deleteExperience(exp._id)}>
        Delete
      </ButtonD>
    </td>
  </Tr>
))


  return (
    <Fragment>
      <Title>Experience Credentials</Title>
      <Table hover tableDark responsiveMd>
        <thead>
          <Tr active>
            <th scope="col">Company</th>
            <th scope="col">Title</th>
            <th scope="col">Years</th>
            <th scope="col"></th>
          </Tr>
        </thead>
        <tbody>{experiences}</tbody>
      </Table>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, {deleteExperience})(Experience);

