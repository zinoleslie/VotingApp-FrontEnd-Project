import { useNavigate } from 'react-router-dom'
import image from '../assets/CodePen-404-Page.gif'
import React, { useEffect } from 'react'

export const Errorpage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 6000);
    })
    return (
        <div>
            <img src={image} alt="error" style={{
                width: "100%",
                height: "100%",
            }} />
        </div>
    )
}
