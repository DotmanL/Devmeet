import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Table, Tr } from 'styled-table-component'
import moment from 'moment';
import { Title,  ButtonD } from './Experiences.styles'
import {deleteEducation} from '../../Redux/Profile/profile.actions'


const Education = ({ education, deleteEducation }) => {
const educations = education.map((edu) => (
  
  
  <Tr active key={edu._id}>
    <td>{edu.school}</td>
    <td>{edu.degree}</td>
    <td>
      <Moment format="YYYY/MM/DD">{moment.utc(edu.from)}</Moment> -{' '}
      {edu.to === null ? (' Now'
      ) : (
      <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>)}
    </td>
    
    <td>
      <ButtonD onClick={()=> deleteEducation(edu._id)}>
        Delete
      </ButtonD>
    </td>
  </Tr>
))


  return (
    <Fragment>
      <Title>Education Details</Title>
      <Table hover tableDark responsiveMd>
        <thead>
          <Tr active>
            <th scope="col">School</th>
            <th scope="col">Degree</th>
            <th scope="col">Years</th>
            <th scope="col"></th>
          </Tr>
        </thead>
        <tbody>{educations}</tbody>
      </Table>
    </Fragment>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation}) (Education);

