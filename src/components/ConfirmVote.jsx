import React, { useEffect, useState } from 'react'
import { Candidates } from '../data'
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-Slice';




const ConfirmVote = () => {
    const [modalCandidate, setmodalCandidate] = useState({});

    const dispatch = useDispatch()




    //close confirm vote
    const closeCandidateModal = () => {
            dispatch(UiActions.closeVoteCandidateModal())
    }




    // function to get any candidate 
    const fetchCandidate = () => {
        Candidates.find(candidate => {
            if (candidate.id === "C2") {
                setmodalCandidate(candidate)
            }
        })
    }

    useEffect(() => {
        fetchCandidate()
    }, [])


    // console.log(modalCandidate)

    return (
        <section className="modal">
            <div className="modal__content confirm__vote-content">
                <h5>Please confirm your vote</h5>
                <div className="confirm__vote-image">
                    <img src={modalCandidate.image} alt={modalCandidate.fullname} />
                </div>
                <h2>{modalCandidate.fullname?.length >17 ? modalCandidate.fullname?.substring(0, 17) + '...': modalCandidate?.fullname}</h2>
                <p>{modalCandidate.motto?.length >25 ? modalCandidate.motto?.substring(0, 25) + '...': modalCandidate?.motto}</p>

                <div className="confirm__vote-cta">
                    <button className="btn btn-light" onClick={closeCandidateModal}>Cancel</button>
                    <button className="btn btn-primary">Confirm</button>
                </div>
            </div>
        </section>
    )
}

export default ConfirmVote