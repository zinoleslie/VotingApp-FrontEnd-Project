import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import "./LoginModal.css"; 

function LoginModal() {

    const navigate = useNavigate()
    const token = useSelector(state => state?.vote.currentVoter.token)
    //ACCESS CONTROL
    useEffect(()=>{
        if(!token){
        navigate('/')
    }},[])


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
                <p>Login Successful..😊</p>
            </Modal.Header>
        </Modal>
    );
}

export default LoginModal;
