import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import {Candidates as dummyCandidates} from '../data'
import CandidateComp from '../components/CandidateComp';
import ConfirmVote from '../components/ConfirmVote';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { voteAction } from '../store/vote-slice';

const Candidate = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL
    useEffect(()=>{
        if(!token){
        navigate('/')
    }},[])




    const { id: selectedElection } = useParams();
    const [candidates, setCandidates] = useState([]);
    const [canVote, SetCanVote] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(voteAction.changeSelectedElection(selectedElection)); // store in redux
        console.log('saved to redux store ', selectedElection)
    },[selectedElection, dispatch])

    const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)

    
    const voterID = useSelector(state => state?.vote?.currentVoter?._id)

    const BackendEndUrl = import.meta.env.VITE_BACKEND_URL


    const getElectCandiates = async () => {
        try {
            const response = await axios.get(`${BackendEndUrl}/elections/${selectedElection}/candidates`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
            // console.log('the response is' ,response)
            const electCandidates = await response.data.data

            setCandidates(electCandidates);
        } catch (error) {
            console.log('cant run the thr try api function', error)
        }
    }

    //get all voters
    const getVoter = async () => {
        try {
            const response = await axios.get(`${BackendEndUrl}/getVoter/${voterID}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
            const votedElect= await response.data.data.votedElections;
        if (votedElect === selectedElection) {
            SetCanVote(false)
        }
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getElectCandiates();
        getVoter();
    }, [])

    // console.log('here are the candidates ',candidates)

    return (

        <>
            <section className="candidates ">
                { !canVote ? <header className="candidate__header">
                    <h1>Already Voted</h1>
                    <p>You are only allowed to vote once, please vote in another election or sign out.</p>
                    <img src="https://freefrontend.com/assets/img/403-forbidden-html-templates/Mouse-Jail-for-403-Error-Page.gif" alt="403 error GIF" />
                </header> :
                    <>
                        {candidates.length > 0 ? <header className="candidate__header">
                            <h1>Vote Your Candidates</h1>
                            <p>These are the candidates for the selected elections, please note voters can only vote once therefore vote while.</p>
                        </header> : <header className="candidate__header">
                            <h1>Inactive Election</h1>
                            <p>There are no candidates found for this election, please check back later.</p>
                        </header>}
                        <div className="container candidate__container">
                            {
                                candidates.map(candidate => <CandidateComp key={candidate._id} {...candidate} />)
                            }
                        </div>
                    </>
                }
            </section>

            {voteCandidateModalShowing && <ConfirmVote/>}
        </>
    )
}

export default Candidate