import React, { useEffect, useState } from 'react'
import { Candidates } from '../data'
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-Slice';




const ConfirmVote = () => {
    const [modalCandidate, setmodalCandidate] = useState({});

    const dispatch = useDispatch()




    //close confirm vote
    const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal())
    }


    const selectedVoteCandidate = useSelector(state => state.vote.selectedVoteCandidate);
 



    // function to get any candidate 
    const fetchCandidate = () => {
        const candidate = Candidates.find(candidate => candidate.id === selectedVoteCandidate);
        if(candidate){
            setmodalCandidate(candidate)
        }
    }

    useEffect(() => {
        if (selectedVoteCandidate) {
            console.log('selectedVoteCandidate changed:', selectedVoteCandidate);
            fetchCandidate();
        }
    }, [selectedVoteCandidate])

    

    // console.log(modalCandidate)

    return (
        <section className="modal">
            <div className="modal__content confirm__vote-content">
                <h5>PLEASE CONFIRM YOUR VOTE</h5>
                <div className="confirm__vote-image">
                    <img src={modalCandidate.image} alt={modalCandidate.fullname} />
                </div>
                <h2>{modalCandidate.fullname?.length > 17 ? modalCandidate.fullname?.substring(0, 17) + '...' : modalCandidate?.fullname}</h2>
                <p>{modalCandidate.motto?.length > 25 ? modalCandidate.motto?.substring(0, 25) + '...' : modalCandidate?.motto}</p>

                <div className="confirm__vote-cta">
                    <button className="btn modal__cancel" onClick={closeCandidateModal}>Cancel</button>
                    <button className="btn btn-primary">Confirm</button>
                </div>
            </div>
        </section>
    )
}

export default ConfirmVote