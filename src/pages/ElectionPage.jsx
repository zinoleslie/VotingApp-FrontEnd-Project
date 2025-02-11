import { useEffect, useState } from "react"
// import { elections as dummyElection } from "../data"
import Election from "../components/Election"
import Loader from '../components/Loader'
import AddElectionModal from "../components/AddElectionModal"
import { useDispatch, useSelector } from "react-redux"
import { UiActions } from "../store/ui-Slice"
import UpdateElectionModal from "../components/UpdateElectionModal"
import axios from "axios"
import { resetRefresh } from "../store/refreshElelectionSlice"
import {  useNavigate } from "react-router-dom"





const ElectionPage = () => {
  const token = useSelector(state => state?.vote?.currentVoter?.token)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/')
    }
  },[])



  const [elections, setelections] = useState([])
  const [isLoading, SetIsLoading] = useState(false);

  const dispatch = useDispatch()

  //open confirm vote modal
  const openElectioonModal = () => {
    dispatch(UiActions.openelectionModalShowing());
  }

  //check the current state of the modal showing
  const isModalOpen = useSelector(state => state.ui.electionModalshowing)
  const isUpdateModalOpen = useSelector(state => state.ui.updateElectionModalShowing)
  const isAdmin = useSelector(state => state?.vote?.currentVoter?.data.isAdmin)
  const shouldRefreshPage = useSelector(state => state?.refreshElection?.shouldRefreshElection)
  // console.log('isAdmin', isAdmin)

  const handleRender = async () => {
    SetIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5007/api/getElections`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      setelections(response.data.data);
      SetIsLoading(false);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (shouldRefreshPage) {
      
      dispatch(resetRefresh());  // Reset after fetching new elections
    }
    handleRender();
  }, [shouldRefreshPage]);
  console.log('is modal open', isModalOpen)


  return (
    <>
      {isLoading && <Loader />}
      <section className="elections">
        <div className="container elections__container">
          <header className="elections__header">
            <h1>Ongoing Elections</h1>
            {isAdmin && <button className="btn btn-primary" onClick={openElectioonModal}>Create New Election</button>}
          </header>
          <menu className="elections__menu">
            {
              elections.map(elect => <Election key={elect._id} {...elect} />)
            }
          </menu>
        </div>
      </section>


      {isModalOpen && <AddElectionModal />}
      {isUpdateModalOpen && <UpdateElectionModal />}
    </>
  )
}

export default ElectionPage