import React from 'react'
import { elections as dummyElection } from '../data'
import { useParams } from 'react-router-dom'



export const ElectionDetails = () => {

  const { id } = useParams();


  return (
    <div>ElectionDetails</div>
  )
}
