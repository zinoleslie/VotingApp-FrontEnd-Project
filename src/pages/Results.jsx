import { useState } from "react"
import {elections as dummyElection} from "../data"
import ResultElection from "../components/ResultElection"

const Results = () => {
    const [textElection, settextElection] = useState(dummyElection)
  return (
    <section className="results">
        <div className="result__container ">
            {
                textElection.map(elect => <ResultElection
                key={elect.id}
                {...elect}
                /> )
            }

        </div>
    </section>
  )
}

export default Results