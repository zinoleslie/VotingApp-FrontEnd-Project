import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [userData, setUserData] = useState({ Email: "", Password: "" });

  const styles = {
    formBox: {
      border: "none",
      borderRadius: "10px",
      margin: "50px auto",
      padding: "20px 30px",
      backgroundColor: 'rgb(241,241,241)',
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

  console.log(userData);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <Form style={styles.formBox} className='login__Box'>
            <h3 className="fw-bold mb-4 text-center">Sign In</h3>
            <p style={styles.errorMessage}>Any error from the backend</p>

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

            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
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
  );
}

export default LoginPage;
