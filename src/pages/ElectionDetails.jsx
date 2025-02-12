import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ElectionCand from '../components/ElectionCand'
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-Slice'
import AddCandidateModal from '../components/AddCandidateModal'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { voteAction } from '../store/vote-slice';




export const ElectionDetails = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [elections, setElections] = useState([])
  const [candidates, setCandidates] = useState([])
  const [voters, setVoters] = useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { id } = useParams();

  const addModelShowing = useSelector(state => state.ui.addCandidateModalshowing);
  const token = useSelector(state => state?.vote?.currentVoter?.token);
  const isAdmin = useSelector(state => state?.vote?.currentVoter?.data.isAdmin);

  const BackendEndUrl = import.meta.env.VITE_BACKEND_URL

  const getElections = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${BackendEndUrl}getsingleElection/${id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      const fetchedElections = await response.data.data;
      setElections(fetchedElections);
      // console.log('setElections....', setElections)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }


  const getCandidates = async () => {
    try {
      const response = await axios.get(`${BackendEndUrl}/elections/${id}/candidates`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      const allCandidate = await response.data.data || [];
      setCandidates(allCandidate)
      console.log('allCandidate', allCandidate)
    } catch (error) {
      console.log(error)
      setCandidates([]);
    }
  }

  const getVoters = async () => {
    try {
      const response = await axios.get(
        `${BackendEndUrl}/election/${id}/voters`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      const allVoters = response.data.data || []; // Ensure it's always an array
      console.log("API Response:", response);
      console.log("Voter Data:", response.data.data);

      setVoters(allVoters);
      console.log("Voters:", allVoters); // Debugging log
    } catch (error) {
      console.log("Error fetching voters:", error);
      setVoters([]); // Prevent crashes by setting an empty array
    }
  };


  const deleteElection = async () => {
    setIsLoading(true)
    try {
      const response = await axios.delete(`${BackendEndUrl}/delete/election/${id}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      navigate("/elections")
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false) 
  }


  useEffect(() => {
    getElections()
    getCandidates()
    getVoters()
  }, [])



  const openModal = () => {
    dispatch(UiActions.openAddCandidateModalshowing());
    dispatch(voteAction.changeaddCandidateElectionID(id));
  }


  return (
    <>
      <section className="electionDetails">
        <div className="container electionDetails__container">
          <h2>{elections.Title}</h2>
          <p>{elections.Description}</p>

          <div className="electionDetails__image">
            <img src={elections.thumbnail} alt={elections.Title} />
          </div>


          <menu className="electionDetails__candidate">
            {
              !candidates || candidates.length < 1 ?
                <h2>There are no Candidates for the election</h2> :
                candidates?.map(electItem => <ElectionCand key={electItem._id} {...electItem} />)
            }
            {isAdmin && <button className="add__candidate-btn" onClick={openModal}><IoAddOutline /></button>}

          </ menu>

          <menu className="voters">
            <h2>Voters</h2>
            <table className="voters__table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {
                  voters.map(voter => <tr key={voter._id}>
                    <td><h5>{voter.Fullname}</h5></td>
                    <td>{voter.Email}</td>
                    <td>{voter.createdAt}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </menu>

          <button className="btn btn-danger  delete__btn" style={{ display: 'flex', justifyContent: "center", width: "90%", marginTop: "20px" }} onClick={deleteElection}>{ isLoading ? <Spinner/> : "Delete Election"}</button>
        </div>
      </section>

      {addModelShowing && <AddCandidateModal />}
    </>

  )
}


export default ElectionDetails