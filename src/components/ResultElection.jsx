import React, { useEffect, useState } from 'react'
// import {Candidates as dummyCandidate} from '../data'
import CandidateRating from './CandidateRating'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
// import Loader from './Loader'


const ResultElection = ({ Title, _id: id, thumbnail }) => {
    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL
    useEffect(()=>{
        if(!token){
        navigate('/')
    }},[])


    const [totalVotes, setTotalVotes] = useState(0)
    const [electCandidate, setElectCandidate] = useState([])
    // const [isLoading, setIsLoading] = useState(false);
    const BackendEndUrl = import.meta.env.VITE_BACKEND_URL

    

    const getCandidates = async () => {
        // setIsLoading(true)
        try {
            const response = await axios.get(`${BackendEndUrl}/elections/${id}/candidates`, { withCredentials: true, headers: { Authorization: ` Bearer ${token}` } })
            const candidates = await response.data.data
            setElectCandidate(candidates)

            //calculate total votes
            const votes = candidates.map(candidate => candidate.voteCount)
            setTotalVotes(votes.reduce((acc, curr) => acc + curr, 0))
        } catch (error) {
            console.log(error)
        } 
      
    }



    useEffect(() => {
        getCandidates()
    }, [])
    return (

        <>


            <article className=" result" style={{ width: "700px", margin: "0 auto" }} >

                <header className=' result__header '>
                    <div className="box__card">
                        <h4>{Title || "default text"}</h4>
                        <div className="result__header-image" style={{ width: "300px" }}>
                            <img src={thumbnail || 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg'} style={{
                                width: "70px", height: "70px", borderRadius: "50%",
                                justifyContent: "end", margin: "5px 5px"
                            }} alt={Title} />
                        </div>
                    </div>


                    <ul className="result__list  ">
                        {
                            electCandidate.map(candidate => <CandidateRating
                                key={candidate._id}
                                {...candidate}
                                totalVotes={totalVotes}
                            />)
                        }
                    </ul>
                    <Link to={`/elections/${id}/candidates`} className='btn__election'>Enter Election</Link>
                </header>

            </article>
        </>

    )
}

export default ResultElection