import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-Slice';
import axios from 'axios';
import { voteAction } from '../store/vote-slice';
import { useNavigate } from 'react-router-dom';
import AlreadyVoted from './AlreadyVoted';
import { Spinner } from 'react-bootstrap'


const ConfirmVote = () => {

     const navigate = useNavigate()
        const token = useSelector(state => state?.vote.currentVoter.token)
        //ACCESS CONTROL
        useEffect(()=>{
            if(!token){
            navigate('/')
        }},[])


    const [modalCandidate, setModalCandidate] = useState({});
    const [VotedError, setVotedError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();


    const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal());
    };

    const selectedVoteCandidate = useSelector(state => state?.vote?.selectedVoteCandidate);
    // const token = useSelector(state => state?.vote?.currentVoter?.token);
    const CurrrentVoter = useSelector(state => state?.vote?.currentVoter);
    const selectedElection = useSelector(state => state.vote.selectedElection);

    // Fetch candidate details
    const fetchCandidate = async () => {
        try {
            const response = await axios.get(`http://localhost:5007/api/get/allCandidate/${selectedVoteCandidate}`, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${token}` }
            });
            setModalCandidate(response.data.data);
        } catch (error) {
            console.log('Error fetching candidate', error);
        }
    };

    // Confirm vote for candidate
    const confirmVote = async () => {
        setIsLoading(true);
        try {
            const response = await axios.patch(`http://localhost:5007/api/voteCandidate/${selectedVoteCandidate}`,
                { selectedElection },
                { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
            );
            const voteResult = response.data.data;
            dispatch(voteAction.changeCurrentVoter({ ...CurrrentVoter, votedElections: voteResult }));
            navigate('/congrats');
            closeCandidateModal();
        } catch (error) {
            console.log('Error voting:', error);
            setVotedError(true)
            setTimeout(() => {
                closeCandidateModal();
                navigate('/results');
            }, 4000);

        } finally {
            setIsLoading(false);  // Ensure loading state resets
        }
    };

    useEffect(() => {
        fetchCandidate();
    }, [selectedVoteCandidate]);

    return (
        <>
            {/* Show AlreadyVoted modal only when VotedError is true */}
            {VotedError && <AlreadyVoted />}

            {/* Voting modal remains visible */}
            <section className="modal">
                <div className="modal__content confirm__vote-content">
                    <h5>PLEASE CONFIRM YOUR VOTE</h5>
                    <div className="confirm__vote-image">
                        <img src={modalCandidate.image} alt={modalCandidate.fullname} />
                    </div>
                    <h2>
                        {modalCandidate.fullname?.length > 17 ? modalCandidate.fullname.substring(0, 17) + '...' : modalCandidate?.fullname}
                    </h2>
                    <p>
                        {modalCandidate.motto?.length > 25 ? modalCandidate.motto.substring(0, 25) + '...' : modalCandidate?.motto}
                    </p>

                    <div className="confirm__vote-cta">
                        <button className="btn modal__cancel" onClick={closeCandidateModal}>Cancel</button>
                        <button className="btn btn-primary modal__confirm" onClick={confirmVote}>{isLoading ? <Spinner animation="grow" style={{marginTop:"-2px"}}/> : 'Confirm'}</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConfirmVote;
