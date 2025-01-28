import React from 'react';
import { IoMdClose } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-Slice';


const UpdateElectionModal = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [thumbnail, setThumbnail] = useState("")

    const dispatch = useDispatch();

    const closeUpdateElectionModal = () => {
        dispatch(UiActions.closeUpdateElectionModal());

    }




    return (
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">

                    <h4>Edit Election</h4>
                    <button className="modal__close" onClick={closeUpdateElectionModal}><IoMdClose /></button>

                </header>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Election Title:</Form.Label>
                        <Form.Control type="title" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter election title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Election Description</Form.Label>
                        <Form.Control type="description" value={description} name='description' onChange={e => setDescription(e.target.value)} placeholder="enter description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicThumnail">
                        <Form.Label>Election Thumbnail</Form.Label>
                        <Form.Control type="file" name='thumbnail' accept='png, jpg, jpeg, avif, webp' onChange={e => setThumbnail(e.target.files[0])} placeholder="enter description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update Election
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default UpdateElectionModal