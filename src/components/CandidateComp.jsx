import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-Slice';
import { voteAction } from '../store/vote-slice';
import { useNavigate } from 'react-router-dom';


const CandidateComp = ({ image, fullname, _id, motto }) => {

  const navigate = useNavigate()
  const token = useSelector(state => state?.vote.currentVoter.token)
  //ACCESS CONTROL
  useEffect(()=>{
      if(!token){
      navigate('/')
  }},[])

      // const [isLoading, SetIsLoading] = useState(false);

  const dispatch = useDispatch();

  // open confirm vote modal
  const openCandidateModal = (_id) => {
    dispatch(UiActions.openVoteCandidateModal());
    dispatch(voteAction.changeSelectedVoteCandidate(_id));

  };



  return (

    <>
      <article className="container candidate ">
        <div className="candidate__image">
          <img src={image} style={{ width: "100%", height: "400px" }} alt={fullname} />
        </div>

        {/* <div className="candidate__info"> */}
        <h4>{fullname?.length > 20 ? fullname.substring(0, 20) + "..." : fullname}</h4>
        <small>{motto?.length > 25 ? motto.substring(0, 25) + "..." : motto}</small>


        <button className="vote__btn btn btn-primary" onClick={() => {
          console.log('Button clicked');
          openCandidateModal(_id);
        }}>Vote</button>
      </article>
    </>



  )
}

export default CandidateComp