import React, { useEffect } from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-Slice';
import { useNavigate } from 'react-router-dom';
// import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SuccessPage from './SuccessPage';
// import { Candidates as dummyCandidates}  from '../data'

const AddCandidateModal = () => {

    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [])


    const [fullname, setFullname] = useState('');
    const [motto, setMotto] = useState('');
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)


    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const closeCandidateModal = () => {
        dispatch(UiActions.closeAddCandidateModalshowing())
    }

    const electionId = useSelector(state => state?.vote?.addCandidateElectionID);

    console.log('electionId', electionId)

    const addCandidate = async (e) => {
        setIsLoading(true)
        try {
            e.preventDefault();
            const newCandidate = new FormData();
            newCandidate.set('fullname', fullname);
            newCandidate.set('motto', motto);
            newCandidate.set('image', image);
            newCandidate.set('electionId', electionId);

            await axios.post(`http://localhost:5007/api/add/candidate`, newCandidate, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });

            setSuccess(true)

            setTimeout(() => {
                closeCandidateModal()
                navigate(0);
            }, 3000);

        } catch (error) {
            console.log('unable to create election', error);
        }
        setIsLoading(false)

    }


    return (
        <>

        {success && <SuccessPage message={'Candidate added successfully'} /> }

        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">
                    <h4>Add Candidate</h4>
                    <button className="modal__close" onClick={closeCandidateModal}><IoMdClose /></button>
                </header>
                <Form onSubmit={addCandidate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Candidate name:</Form.Label>
                        <Form.Control type="title" name="title" value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Enter candidate name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Candidate Motto</Form.Label>
                        <Form.Control type="description" value={motto} name='description' onChange={e => setMotto(e.target.value)} placeholder="enter motto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicThumnail">
                        <Form.Label>Candidate Image</Form.Label>
                        <Form.Control type="file" name='image' accept='png, jpg, jpeg, avif, webp' onChange={e => setImage(e.target.files[0])} placeholder="select an image " />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        { isLoading ? <Spinner animation="border"  color = "green"/> : "Submit"}
                    </Button>
                </Form>
            </div>
        </section>
        </>

        
    )
}

export default AddCandidateModal