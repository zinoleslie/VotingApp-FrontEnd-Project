import { useEffect, useState } from "react"
// import { elections as dummyElection } from "../data"
import ResultElection from "../components/ResultElection"
import axios from 'axios'
import { useSelector } from "react-redux"
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom"
// import Loader from "../components/Loader"

const Results = () => {
  const token = useSelector(state => state?.vote?.currentVoter?.token)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [])



  const [textElection, settextElection] = useState([])
  const [isLoading, SetIsLoading] = useState(false);


  const BackendEndUrl = import.meta.env.VITE_BACKEND_URL


  // console.log(token)

  const getElection = async () => {

    if (!token) {
      console.error("No token found. User might not be logged in.");
      return; // Stop execution if token is missing
    }

    SetIsLoading(true);


    try {
      const response = await axios.get(`${BackendEndUrl}/getElections`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });


      if (Array.isArray(response.data.data)) {
        settextElection(response.data.data);
      } else {
        settextElection([]);
      }
    } catch (error) {
      console.error("Error fetching elections:", error);
      settextElection([]); // Prevent errors by setting empty array
    }
    SetIsLoading(false);
  };


  useEffect(() => {
    getElection();
  }, []);


  return (
    <>
      {isLoading && <Loader />}
      <section className="results">

        <div className="result__container ">
          {
            textElection.map(elect => <ResultElection
              key={elect._id}
              {...elect}
            />)
          }

        </div>
      </section>
    </>

  )
}

export default Results