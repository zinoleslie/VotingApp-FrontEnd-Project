import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <section className="loader">
            <div className="loader__container">
            <Spinner/>
            </div>
        </section>
    )
}

export default Loader