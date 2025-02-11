import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SuccessPage from './SuccessPage';
import { Spinner } from 'react-bootstrap';


const ElectionCand = ({ fullname, motto, _id: id, image }) => {

  const navigate = useNavigate()
  const token = useSelector(state => state?.vote.currentVoter.token)
  //ACCESS CONTROL
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [])


  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //getting the isAdmin from the redux store using useSelector
  const isAdmin = useSelector(state => state?.vote?.currentVoter?.data.isAdmin);


  const deleteCandidate = async () => {
    // console.log('Attempting to delete candidate with ID:', id);

    // if (!id) {
    //   console.error('Candidate ID is undefined. Aborting request.');
    //   return;
    // }


    try {
      setIsLoading(true)
      const response = await axios.delete(`http://localhost:5007/api/delete/candidate/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log('Response:', response.data);
      setIsLoading(false);
      navigate(0)

    } catch (error) {
      console.error("Error deleting candidate:", error.response?.data || error.message);
    }
  };





  return (
    <>
      {isLoading && <SuccessPage message={'...'} icon={<Spinner />} header={'deleting...'} />}

      <li className="electionCandidate">
        <div className="electionCandidate__image">
          <img src={image} alt={fullname} />
        </div>
        <div>
          <h5>{fullname}</h5>
          <small>{motto?.length > 70 ? motto.substring(0, 70) + '...' : motto}</small>
          {isAdmin && <button className="electionCandidate__btn" onClick={deleteCandidate}><IoMdTrash /></button>}
        </div>
      </li>
    </>
  )
}

export default ElectionCand