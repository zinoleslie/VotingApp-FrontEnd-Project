import React from 'react'
import { IoMdTrash } from "react-icons/io";

const ElectionCand = ({fullname, motto, id, image}) => {
  return (
    <li className="electionCandidate">
        <div className="electionCandidate__image">
            <img src={image} alt={fullname} />
        </div>
        <div>
            <h5>{fullname}</h5>
            <small>{motto?.length > 70 ? motto.substring(0, 70) + '...' : motto}</small>
            <button className="electionCandidate__btn"><IoMdTrash/></button>
        </div>
    </li>
  )
}

export default ElectionCand