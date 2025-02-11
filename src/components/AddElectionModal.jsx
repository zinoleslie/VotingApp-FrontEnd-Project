import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-Slice';
import axios from 'axios';
import { triggerRefresh } from '../store/refreshElelectionSlice';
import { Spinner } from 'react-bootstrap';
import SuccessPage from './SuccessPage';
import { useNavigate } from 'react-router-dom';
;


const AddElectionModal = () => {

    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL
    useEffect(()=>{
        if(!token){
        navigate('/')
    }},[])


    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [thumbnail, setThumbnail] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false)

    const dispatch = useDispatch();
    

    const closeElectionModal = () => {
        dispatch(UiActions.closeelectionModalShowing());
    }

    const createElection = async (e) =>{
        setIsLoading(true)
        e.preventDefault();
        try {
            const newElection = new FormData();
            newElection.set('Title', Title);
            newElection.set('Description', Description);
            newElection.set('thumbnail', thumbnail);

            const response = await axios.post(`http://localhost:5007/api/createElection`, newElection, {withCredentials: true, headers: { Authorization: `Bearer ${token}`}});
            // closeElectionModal();
            setIsLoading(false)
            setSuccess(true)
        } catch (error) {
            console.log(error)
        }

        
    }

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                closeElectionModal();
                dispatch(triggerRefresh()); // Refresh after 3 seconds
            }, 3000);
        }
    }, [success, dispatch]);





    return (
        <>

        {success && <SuccessPage message={"Election Created Successfully..."}/>}
        
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">

                    <h4>Create New Election</h4>
                    <button className="modal__close" onClick={closeElectionModal}><IoMdClose /></button>

                </header>
                <Form onSubmit={createElection}>
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
                        <Form.Control type="file" name='thumbnail'  accept='png, jpg, jpeg, avif, webp' onChange={e => setThumbnail(e.target.files[0])} placeholder="enter description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {isLoading ? <Spinner animation="grow"/> :  "Submit"}
                    </Button>
                </Form>
            </div>
        </section>
        </>
    )
}

export default AddElectionModal