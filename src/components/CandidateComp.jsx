import React from 'react'
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-Slice';


const CandidateComp = ({ image, fullname, id, motto }) => {

  const dispatch = useDispatch();

  // open confirm vote modal
  const openCandidateModal = () => {
    console.log('dispatching action...')
    dispatch(UiActions.openVoteCandidateModal())
    console.log('action dispatched')
  }


  return (


    <article className="container candidate ">
      <div className="candidate__image">
        <img src={image} style={{ width: "100%", height: "400px" }} alt={fullname} />
      </div>

      {/* <div className="candidate__info"> */}
      <h4>{fullname?.length > 20 ? fullname.substring(0, 20) + "..." : fullname}</h4>
      <small>{motto?.length > 25 ? motto.substring(0, 25) + "..." : motto}</small>


      <button className="vote__btn btn btn-primary" onClick={() => {
        console.log('Button clicked');
        openCandidateModal();
      }}>Vote</button>
    </article>


  )
}

export default CandidateComp