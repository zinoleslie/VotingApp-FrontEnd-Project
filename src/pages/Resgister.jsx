import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Register() {
  const [userData, setUserData] = useState({ Fullname: "", Email: "", Password: "", Password2: "" });

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

  // Function to handle controlled input
  const handleSubmit = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <Form style={styles.formBox} className='login__Box'>
            <h3 className="fw-bold mb-4 text-center mb-4">Sign Up</h3>
            <p style={styles.errorMessage}>Any error from the backend</p>
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                onChange={handleSubmit}
                placeholder="Enter password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="Password2"
                onChange={handleSubmit}
                placeholder="Confirm your password"
              />
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
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
