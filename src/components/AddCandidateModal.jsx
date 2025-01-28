import React from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-Slice';
// import { Candidates as dummyCandidates}  from '../data'

const AddCandidateModal = () => {

    const [fullname, setFullname] = useState('');
    const [motto, setMotto] = useState('');
    const [image, setImage] = useState('');



    const dispatch = useDispatch();
    const closeCandidateModal = () => {
        dispatch(UiActions.closeAddCandidateModalshowing())
    }


    return (
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">
                    <h4>Add Candidate</h4>
                    <button className="modal__close" onClick={closeCandidateModal}><IoMdClose /></button>
                </header>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h4>Candidate Name:</h4>
                        <Form.Control type="title" value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Enter Candidate Name" />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h4>Candidate Motto:</h4>
                        <Form.Control type="title" value={motto} onChange={e => setMotto(e.target.value)} placeholder="Enter candidate motto" />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h4>Candidate Image:</h4>
                        <Form.Control type="file" name="title" className='form-control' value={image} onChange={e => setImage(e.target.files[0])} placeholder="Enter candidate image" accept="png, jpg, jpeg, avif, webp" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Add candidate
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default AddCandidateModal