import { useState } from "react"
import { elections as dummyElection } from "../data"
import Election from "../components/Election"
import AddElectionModal from "../components/AddElectionModal"
import { useDispatch, useSelector } from "react-redux"
import { UiActions } from "../store/ui-Slice"




const ElectionPage = () => {
  const [elections, setelections] = useState(dummyElection)

  const dispatch = useDispatch()

  //open confirm vote modal
  const openElectioonModal = () => {
    dispatch(UiActions.openelectionModalShowing())
  } 

  //check the current state of the modal showing
  const isModalOpen = useSelector(state => state.ui.electionModalshowing)


  return (
    <>
      <section className="elections">
        <div className="container elections__container">
          <header className="elections__header">
            <h1>Ongoing Election</h1>
            <button className="btn btn-primary" onClick={openElectioonModal}>Create New Election</button>
          </header>
          <menu className="elections__menu">
            {
              elections.map(elect => <Election key={elect.id} {...elect} />)
            }
          </menu>
        </div>
      </section>

      {isModalOpen && <AddElectionModal/>}
    </>
  )
}

export default ElectionPage