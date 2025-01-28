import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { UiActions } from '../store/ui-Slice';

const Election = ({id, title, description, thumbnail}) => {

  const dispatch = useDispatch();

  const openEditModal = () => {
    dispatch(UiActions.openUpdateElectionModal());
  }


  return (
    <article className="election">
        <div className="election__image">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="election__info">
            <Link to={`/elections/${id}`} style={{textDecoration:"none"}}><h4>{title}</h4></Link>
            <p>{description?.length > 255 ? description.substring(0, 255) + "..." : description}</p>
            <div className="election__cta">
                <Link to={`/elections/${id}`} className='btn btn-light sm'>View</Link>
                <button className='btn sm btn-primary' onClick={openEditModal}>Edit</button>
            </div>
        </div>
    </article>
  )
}

export default Election