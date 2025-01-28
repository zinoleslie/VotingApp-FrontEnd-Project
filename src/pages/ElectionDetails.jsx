import React from 'react'
import { elections as dummyElection } from '../data'
import { Candidates as dummyCandidates} from '../data'
import { Voters as dummyVoters} from '../data'
import { useParams } from 'react-router-dom'
import ElectionCand from '../components/ElectionCand'
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-Slice'
import AddCandidateModal from '../components/AddCandidateModal'




export const ElectionDetails = () => {
  const dispatch = useDispatch()

  const { id } = useParams();

  const currentElection = dummyElection.find(election => election.id == id);
  const electionCandidate = dummyCandidates.filter(candidate => candidate.electionId == id);

  const addModelShowing = useSelector(state => state.ui.addCandidateModalshowing)

  const openModal = () => {
    dispatch(UiActions.openAddCandidateModalshowing())

  }


  return (
    <>
    <section className="electionDetails">
      <div className="container electionDetails__container">
        <h2>{currentElection.title}</h2>
        <p>{currentElection.description}</p>

        <div className="electionDetails__image">
          <img src={currentElection.thumbnail}  alt={currentElection.title} />
        </div>

        <menu className="electionDetails__candidate">
          {
            electionCandidate.map(electItem => <ElectionCand key={electItem.id} {...electItem}/>)
            }

            <button className="add__candidate-btn" onClick={openModal}><IoAddOutline/></button>

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
                dummyVoters.map(voter => <tr key={voter.id}>
                  <td><h5>{voter.fullname}</h5></td>
                  <td>{voter.email}</td>
                  <td>14:43:23</td>
                </tr> )
              }
            </tbody>
          </table>
        </menu>
      </div>
    </section>

    { addModelShowing && <AddCandidateModal/>}
    </>
    
  )
}
