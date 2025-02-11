import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { UiActions } from '../store/ui-Slice';
import { voteAction } from '../store/vote-slice';

const Election = ({_id: id, Title, Description, thumbnail}) => {

  const navigate = useNavigate()
  const token = useSelector(state => state?.vote.currentVoter.token)
  //ACCESS CONTROL
  useEffect(()=>{
      if(!token){
      navigate('/')
  }},[])

  const dispatch = useDispatch();

  const isAdmin = useSelector(state =>state?.vote?.currentVoter?.data.isAdmin)
  
  const openEditModal = () => {
    dispatch(UiActions.openUpdateElectionModal()); 
    dispatch(voteAction.changeidOfElectionToUpdate(id));
  }


  return (
    <article className="election">
        <div className="election__image">
            <img src={thumbnail} alt={Title} />
        </div>
        <div className="election__info">
            <Link to={`/elections/${id}`} style={{textDecoration:"none"}}><h4>{Title}</h4></Link>
            <p>{Description?.length > 180 ? Description.substring(0, 180) + "..." : Description}</p>
            <div className="election__cta">
                {isAdmin && <Link to={`/elections/${id}`} className='btn btn-light sm'>View</Link>}
                {isAdmin && <button className='btn sm btn-primary' onClick={openEditModal}>Edit</button>}
            </div>
        </div>
    </article>
  )
}

export default Election