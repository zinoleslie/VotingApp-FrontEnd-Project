import React, { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-Slice';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SuccessPage from './SuccessPage';
import { triggerRefresh } from '../store/refreshElelectionSlice';
import { useNavigate } from 'react-router-dom';


const UpdateElectionModal = () => {

    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL
    useEffect(()=>{
        if(!token){
        navigate('/')
    }},[])



    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const  [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const dispatch = useDispatch();
    const idOfElectionToUpdate = useSelector(state => state?.vote?.idOfElectionToUpdate);


    console.log('idOfElectionToUpdate', idOfElectionToUpdate)


    const closeUpdateElectionModal = () => {
        dispatch(UiActions.closeUpdateElectionModal());
    }

    const refreshPage = () => {
        dispatch(triggerRefresh());
    }

    const BackendEndUrl = import.meta.env.VITE_BACKEND_URL


    const fetchElection = async () => {
        try {
            const response = await axios.get(`${BackendEndUrl}/getsingleElection/${idOfElectionToUpdate}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
            const election = await response.data.data;
            setTitle(election.Title);
            setDescription(election.Description);
            setThumbnail(election.thumbnail);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchElection();
    }, [])

    const updateElection = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const electionData = new FormData();
            electionData.set('Title', Title);
            electionData.set('Description', Description);
            electionData.set('thumbnail', thumbnail);
            const response = await axios.patch(`${BackendEndUrl}/edit/election/${idOfElectionToUpdate}`, electionData, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
            
            setIsLoading(false)
            setSuccess(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(success){
            setTimeout(()=>{
                setSuccess(false);
                closeUpdateElectionModal();
                refreshPage();
            }, 3000)
        }
    }, [success, refreshPage, closeUpdateElectionModal])




    return (

        <>

        {success && <SuccessPage message={"Election Updated Successfully"}/>}



        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">

                    <h4>Edit Election</h4>
                    <button className="modal__close" onClick={closeUpdateElectionModal}><IoMdClose /></button>

                </header>
                <Form onSubmit={updateElection}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Election Title:</Form.Label>
                        <Form.Control type="title" name="title" value={Title} onChange={e => setTitle(e.target.value)} placeholder="Enter election title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Election Description</Form.Label>
                        <Form.Control type="description" value={Description} name='description' onChange={e => setDescription(e.target.value)} placeholder="enter description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicThumnail">
                        <Form.Label>Election Thumbnail</Form.Label>
                        <Form.Control type="file" name='thumbnail' accept='png, jpg, jpeg, avif, webp' onChange={e => setThumbnail(e.target.files[0])} placeholder="enter description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {isLoading ? <Spinner animation="border" variant="light"/> :    "Update Election"}
                    </Button>
                </Form>
            </div>
        </section>
        </>
        
    )
}

export default UpdateElectionModal