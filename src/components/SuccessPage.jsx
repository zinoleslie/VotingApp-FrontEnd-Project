import Modal from 'react-bootstrap/Modal';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
// import "./SuccessPage.css"; 

function SuccessPage() {
    const styles = {
        success__modal: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '25vh',
            width: '23rem',
            fontSize: '1.5rem',
            textAlign: 'center'
        }
    };

    return (
        <Modal show={true} backdrop="static" keyboard={false} centered>
            <Modal.Header style={styles.success__modal}>
                <small className="icon-success"><IoCheckmarkDoneCircleOutline /></small>
                <Modal.Title style={{ fontSize: '1.5rem', fontWeight: "700" }}>Successful...</Modal.Title>
                <p>You have successfully signed in</p>
            </Modal.Header>
        </Modal>
    );
}

export default SuccessPage;
