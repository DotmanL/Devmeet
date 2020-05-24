import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getGithubRepos} from '../../Redux/Profile/profile.actions';
import Spinner from '../Spinner/Spinner'
import {Container, Header, Repod, RepoN, Git, Repode, RepoL, RepoP} from './ProfileGithub.styles';


const ProfileGithub = ({username, getGithubRepos, repos, }) => {
useEffect(() => {
  getGithubRepos(username)
}, [getGithubRepos, username])


  return (
   
      <Container>
          <Header> <Git /> GithubRepos</Header>
          {repos === null ? <Spinner /> : (repos.map(repo => (
            <Repod key={repo.id}>
              <div>
                <RepoN>
                   <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                    {repo.name}
                  </a>
                  </RepoN>
                  <Repode>{repo.description}</Repode>
              </div>
              <RepoP>
                <RepoL>
                  <li style= {{'background': 'lightblue', }}>
                    Stars: {repos.stargazers_count}
                  </li>
                  <li style= {{'background': 'grey' }}>
                    Watchers: {repos.watchers_count}
                  </li>
                  <li style= {{'background': 'white' }}>
                   Forks : {repos.forks_count}
                  </li>
                  
                </RepoL>
              </RepoP>

            </Repod>
          )))}
      </Container>
      
  
  )
}


ProfileGithub.propTypes = {
repos: PropTypes.array.isRequired,
getGithubRepos: PropTypes.func.isRequired,
username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  repos: state.profile.repos
})


export default connect(mapStateToProps, {getGithubRepos}) (ProfileGithub)
