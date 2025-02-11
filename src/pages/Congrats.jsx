import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Congrats = () => {
  const navigate = useNavigate()
  const token = useSelector(state => state?.vote.currentVoter.token)
  //ACCESS CONTROL
  useEffect(()=>{
      if(!token){
      navigate('/')
  }},[])



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