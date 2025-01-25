import React from 'react'
import { Link } from 'react-router-dom'

const Congrats = () => {
  return (
    <section className="congrats">
      <div className="conatiner congrats__container">
        <h2>Thanks for your vote!</h2>
        <p>your vote is added to your cabndidate's vote count. you will be redirected shortly</p>
        <Link to={'/results'} className='btn btn-primary'>See Results</Link>
      </div>
    </section>
  )
}

export default Congrats