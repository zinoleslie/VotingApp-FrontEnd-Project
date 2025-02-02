import { useEffect, useState } from "react"
// import { elections as dummyElection } from "../data"
import ResultElection from "../components/ResultElection"
import axios from 'axios'
import { useSelector } from "react-redux"
// import Loader from "../components/Loader"

const Results = () => {
  const [textElection, settextElection] = useState([])

  const token = useSelector(state => state?.vote?.currentVoter?.token)
  // console.log(token)

  const getElection = async () => {

    if (!token) {
      console.error("No token found. User might not be logged in.");
      return; // Stop execution if token is missing
    }


    try {
      const response = await axios.get(`http://localhost:5007/api/getElections`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("my resData", response.data.data)


      if (Array.isArray(response.data.data)) {
        settextElection(response.data.data);
      } else {
        settextElection([]);
      }
    } catch (error) {
      console.error("Error fetching elections:", error);
      settextElection([]); // Prevent errors by setting empty array
    }
  };

  // console.log("textElection", response );

  useEffect(() => {
    getElection();
  }, []);

  console.log("my text elections", textElection)

  return (
    <section className="results">
      {/* <Loader/> */}
      <div className="result__container ">
        {
          textElection.map(elect => <ResultElection
            key={elect._id}
            {...elect}
          />)
        }

      </div>
    </section>
  )
}

export default Results