import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { voteAction } from '../store/vote-slice';
import LoginModal from '../components/LoginModal';
import { Spinner } from 'react-bootstrap';
import DotLoader from '../components/DotLoader';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


function LoginPage() {

  const [userData, setUserData] = useState({ Email: "", Password: "" });
  const [errorText, setErrorText] = useState("");
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const BackendUrl = import.meta.env.VITE_BACKEND_URL

  //function to handle login
  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BackendUrl}/loginVoter`,
        userData
      )
      const newVoter = response.data;



      // save new voter in localStorage and redux store
      localStorage.setItem("currentVoter", JSON.stringify(newVoter));
      dispatch(voteAction.changeCurrentVoter(newVoter));

      setShowSuccessPage(true);
      setTimeout(() => {
        navigate('/results'); // Navigate after 3 seconds
      }, 500);

    } catch (error) {
      setErrorText(error.response.data.message);
      setTimeout(() => {
        setErrorText('');
      }, 4000);
    }
    setIsLoading(false);
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
                <div className='d-flex' style={{gap:'10px', alignItems:'center'}}>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="Password"
                    onChange={handleSubmit}
                    placeholder="Must be 6 characters and above"
                  />
                  <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", backgroundColor: "transparent", border: "none", }}>{showPassword ? <FaEye /> : <FaEyeSlash /> }</span>
                </div>

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
                {isloading ? <DotLoader /> : "Sign In"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>

  );
}

export default LoginPage;
