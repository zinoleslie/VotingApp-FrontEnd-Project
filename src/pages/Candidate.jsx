import React from 'react'
import { useParams } from 'react-router-dom'
import {Candidates as dummyCandidates} from '../data'
import CandidateComp from '../components/CandidateComp';
import ConfirmVote from '../components/ConfirmVote';
import { useSelector } from 'react-redux';

const Candidate = () => {
    const {id} = useParams();


    const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)



    const candidates = dummyCandidates.filter(candidate => candidate.electionId === id)
    

    return (

        <>
        <section className="candidates ">
            <header className="candidate__header">
                <h1>Vote Your Candidates</h1>
                <p>These are the candidates for the selected elections, please note voters can only vote once therefore vote while.</p>
            </header>
            <div className="container candidate__container">
                {
                    candidates.map(candidate => <CandidateComp key={candidate.id} {...candidate}/>)
                }
            </div>
        </section>
            
           { voteCandidateModalShowing && <ConfirmVote /> } 
        </>
    )
}

export default Candidate