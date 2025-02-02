import Modal from 'react-bootstrap/Modal';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";
// import "./AlreadyVoted.css"; 

function AlreadyVoted() {
    const styles = {
        success__modal: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '25vh',
            width: '23rem',
            fontSize: '1.5rem',
            textAlign: 'center',
            marginIline: 'auto'
        }
    };

    return (
        <Modal show={true} backdrop="static" keyboard={false} centered>
            <Modal.Header style={styles.success__modal}>
                <small className="icon-danger"><BiSolidError /></small>
                <Modal.Title style={{ fontSize: '1.5rem', fontWeight: "700" }}>Already Voted</Modal.Title>
                <p>You can Only Vote Once...</p>
            </Modal.Header>
        </Modal>
    );
}

export default AlreadyVoted;
