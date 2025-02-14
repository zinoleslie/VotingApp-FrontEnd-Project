import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SuccessPage from '../components/SuccessPage';
import DotLoader from '../components/DotLoader';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

function Register() {
  const [userData, setUserData] = useState({ Fullname: "", Email: "", Password: "", Password2: "" });
  const [errorText, setErrorText] = useState("");
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const styles = {
    formBox: {
      border: "none",
      borderRadius: "10px",
      margin: "50px auto",
      padding: "20px 30px",
      backgroundColor: 'rgb(221, 221, 221)'
    },
    errorMessage: {
      border: 'none',
      padding: '0.6rem 1.5rem',
      backgroundColor: 'red',
      borderRadius: "0.3rem",
      color: 'white'
    }
  };

  const BackendEndUrl = import.meta.env.VITE_BACKEND_URL

  // Function to handle controlled input
  const handleSubmit = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      await axios.post(
        `${BackendEndUrl}/createVoter`,
        userData
      )
      setShowSuccessPage(true);
      setTimeout(() => {
        navigate('/login'); // Navigate after 5 seconds
      }, 3000);
    } catch (error) {
      setErrorText(error.response.data.message);
      setTimeout(() => {
        setErrorText('');
      }, 5000);
    }
    setIsLoading(false)
  }

  return (

    <>

      {showSuccessPage && <SuccessPage />}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <Form style={styles.formBox} className='login__Box' onSubmit={handleRegister}>
              <h3 className="fw-bold mb-4 text-center mb-4">Sign Up</h3>
              {errorText && <p style={styles.errorMessage}>{errorText}</p>}
              <Form.Group className="mb-3" controlId="formBasicFullname">
                <Form.Label className="fw-bold">Fullname</Form.Label>
                <Form.Control
                  type="fullname"
                  name="Fullname"
                  onChange={handleSubmit}
                  placeholder="Enter your fullname"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  onChange={handleSubmit}
                  placeholder="example@gmail.com"
                />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <div className='d-flex' style={{gap:"10px", alignItems:'center'}}>
                  <Form.Control
                  type={showPassword ? 'text' : "password"}
                  name="Password"
                  onChange={handleSubmit}
                  placeholder="Enter password"
                />

                <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", backgroundColor: "transparent", border: "none" }}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                <div className='d-flex' style={{gap:"10px", alignItems:'center'}}>
                <Form.Control
                  type={showPassword2 ? 'text' :"password"}
                  name="Password2"
                  onChange={handleSubmit}
                  placeholder="Confirm your password"
                />

                <span onClick={() => setShowPassword2(!showPassword2)} style={{ cursor: "pointer", backgroundColor: "transparent", border: "none"}}>{showPassword2 ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </Form.Group>

              <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                Already have an account? <b className="text-primary">Sign in</b>
              </Link>

              <Button
                variant="primary"
                type="submit"
                className="d-block mx-auto mt-3"
                style={{ width: "150px" }}
              >
                {isLoading ? <DotLoader /> : "Register"}
              </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* <SuccessPage/> */}
    </>



  );
}

export default Register;
