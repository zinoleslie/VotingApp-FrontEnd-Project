import Form from 'react-bootstrap/Form';

function NodeMailer() {
    return (
        <section className=' form__container'>
            <div className='node__text'>
                <h2>Have a Question? Need Help? Reach out to our Support Team</h2>
            </div>
            <Form>
                <h5><i>Send Us a Message...</i></h5>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>send us message</Form.Label>
                <Form.Control as="textarea"placeholder='message....' rows={3} />
            </Form.Group>

            <button className="btn btn-primary"><i>send message</i></button>
        </Form>
        </section>
        
    );
}

export default NodeMailer;