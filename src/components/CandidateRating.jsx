import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


const CandidateRating = ({ fullname, image, voteCount, totalVotes }) => {

    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [])


    const styles = {
        style: {
            fontWeigth: "700",
            fontSize: "18px",
            margin: "2px 0px "

        }
    }
    return (
        // <section className="row">
        <>

        
            <li className="result__candidate col-12  col-sm-6">
                <div className="image__info ">
                    <div className="d-flex mb-2">
                        <div className="result__candidate-image ">
                            <img src={image || 'default image'} style={{ width: "100%", height: "100%" }} alt={fullname} />
                        </div>
                        <div className="result__candidate-info ">
                            <div>
                                <h5 style={styles.style}>{fullname || "default text"}</h5>
                                <small>{`${voteCount} ${voteCount === 1 ? "vote" : "votes"}`}</small>
                            </div>
                        </div>
                    </div>

                    <div className="result__candidate-rating ">
                        <div className="result__candidate-loader">
                            <span style={{ width: `${voteCount > 0 ? ((voteCount / totalVotes) * 100) : 0}%` }}></span>
                        </div>
                        <small>{`${voteCount > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0}%`}</small>
                    </div>
                </div>

            </li>
        </>

        // </section>

    )
}

export default CandidateRating