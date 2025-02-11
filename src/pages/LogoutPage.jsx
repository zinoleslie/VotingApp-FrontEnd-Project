import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { voteAction } from '../store/vote-slice'

const LogOutPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(voteAction.changeCurrentVoter(null))
        localStorage.removeItem('currentVoter')
        navigate('/')
    },[])


  return (
    <div></div>
  )
}

export default LogOutPage