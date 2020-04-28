import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
  <section className="landing">
  <div className="dark-overlay">
  <div className="landing-inner">
    <h1 className="x-large">Developers Meet</h1>
    <p className="lead">
      Create a developer profile/portfolio, share posts and get help from
      other developers
    </p>
    <div className="buttons">
      <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      <Link to="/signin" className="btn btn-light">Sign In</Link>
    </div>
  </div>
</div>
</section>

  )
}
export default Landing;

