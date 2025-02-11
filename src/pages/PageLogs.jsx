import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { voteAction } from '../store/vote-slice'

const PageLogs = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
        useEffect(() => {
            dispatch(voteAction.changeCurrentVoter(null))
            localStorage.removeItem('currentVoter')
    
            // ✅ Reset theme to default (white theme)
            localStorage.setItem('voting-app-theme', '')  
            
            // ✅ Update the theme on the UI immediately
            document.body.className = ''  
    
            navigate('/')  // Redirect to homepage
        }, [dispatch, navigate])  
    
    return (
        <div>PageLogs</div>
    )
}

export default PageLogs