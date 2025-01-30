import React, { useState } from 'react'
import {Candidates as dummyCandidate} from '../data'
import CandidateRating from './CandidateRating'
import { Link } from 'react-router-dom'


const ResultElection = ({ title,_id: id, thumbnail }) => {
    const [totalVotes, setTotalVotes] = useState(521)
    const electionCandidate = dummyCandidate.filter(candidate => 
        candidate.electionId === id)
    return (
        <article className=" result" style={{width:"700px", margin:"0 auto"}} >
            
            <header className=' result__header '>
                <div className="box__card">
                    <h4>{title}</h4>
                <div className="result__header-image" style={{width:"300px"}}>
                    <img src={thumbnail} style={{width:"70px", height:"70px", borderRadius:"50%",
                        justifyContent:"end",margin:"5px 5px"
                    }} alt={title} />
                </div>
                </div>
                

                <ul className="result__list  ">
                    {
                        electionCandidate.map(candidate => <CandidateRating
                        key={candidate.id}
                        {...candidate}
                        totalVotes={totalVotes}
                        /> )
                    }
                </ul>
                <Link to={`/elections/${id}/candidates`} className='btn__election'>Enter Election</Link>
            </header>
            
        </article>
    )
}

export default ResultElection