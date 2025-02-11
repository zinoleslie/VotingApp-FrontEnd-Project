import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { voteAction } from '../store/vote-slice';
import LoginModal from '../components/LoginModal';

function LoginPage() {

  const [userData, setUserData] = useState({ Email: "", Password: "" });
  const [errorText, setErrorText] = useState("");
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();



  const styles = {
    formBox: {
      border: "none",
      borderRadius: "10px",
      margin: "50px auto",
      padding: "20px 30px",
      backgroundColor: 'rgb(221, 221, 221)',
    },


    errorMessage: {
      border: 'none',
      padding: '0.6rem 1.5rem',
      backgroundColor: 'red',
      borderRadius: "0.3rem",
      color: 'white',
    },
  };



  // Function to handle controlled input
  const handleSubmit = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };




  //function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5007/api/loginVoter`,
        userData
      )
      const newVoter = response.data;



      // save new voter in localStorage and redux store
      localStorage.setItem("currentVoter", JSON.stringify(newVoter));
      dispatch(voteAction.changeCurrentVoter(newVoter));
      console.log('the new voter credentials', newVoter);

      setShowSuccessPage(true);
      setTimeout(() => {
        navigate('/results'); // Navigate after 3 seconds
      }, 3000);

    } catch (error) {
      setErrorText(error.response.data.message);
      setTimeout(() => {
        setErrorText('');
      }, 4000);
    }
  }


  return (
    <>
      {showSuccessPage && <LoginModal />}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <Form style={styles.formBox} className='login__Box' onSubmit={handleLogin}>
              <h3 className="fw-bold mb-4 text-center">Sign In</h3>
              {errorText && <p style={styles.errorMessage}>{errorText}</p>}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  onChange={handleSubmit}
                  placeholder="example@gmail.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="Password"
                  onChange={handleSubmit}
                  placeholder="Must be 6 characters and above"
                />
              </Form.Group>

              <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
                Don't have an account? <b className="text-primary">Sign up</b>
              </Link>

              <Button
                variant="primary"
                type="submit"
                className="d-block mx-auto mt-3"
                style={{ width: "150px" }}
              >
                Sign In
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>

  );
}

export default LoginPage;
