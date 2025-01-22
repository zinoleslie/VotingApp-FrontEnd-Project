import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

function Navigation() {
  const [ Darktheme, setDarktheme ] =  useState(localStorage.getItem('voting-app-theme'));

  // function to change toggle theme 
  const handleToggle = () =>{
    if(localStorage.getItem('voting-app-theme') == 'dark'){
      localStorage.setItem('voting-app-theme', '');
    }else{
      localStorage.setItem('voting-app-theme', 'dark');
    }
    setDarktheme(localStorage.getItem('voting-app-theme'));
  }


  useEffect(() => {
    document.body.className = localStorage.getItem('voting-app-theme');
  }, [Darktheme]);





  const styles = {
    Pagename:{
      marginLeft: "-10px",
      fontSize: "30px",
      fontWeight:"700",
      color: "#fff"
    },
    toggleBtn:{
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "25px"
    },
    navbar:{
      backgroundColor:"rgb(18, 27, 82)",
      color:'#fff',
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.navbar}>
      <Container>
        {/* Navbar brand */}
        <Navbar.Brand href="#home" style={styles.Pagename}>
          <i>WebVote</i>
        </Navbar.Brand>
  
        {/* Group the sun/moon toggle and toggle bar */}
        <div className="d-lg-none d-flex align-items-center">
          <button style={styles.toggleBtn} onClick={handleToggle}>
            {Darktheme ? <FaSun /> : <FaMoon />}
          </button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2" />
        </div>
  
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Centered navigation links */}
          <Nav className="mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Nav.Link href="#features" className="fw-bold text-white mx-3">Features</Nav.Link>
            <Nav.Link href="results" className="fw-bold text-white mx-3">Results</Nav.Link>
            <Nav.Link href="/election" className="fw-bold text-white mx-3">Elections</Nav.Link>
          </Nav>
  
          {/* Moon/Sun toggle icon for large screens */}
          <Nav className="d-none d-lg-flex">
            <button style={styles.toggleBtn} onClick={handleToggle}>
              {Darktheme ? <FaSun /> : <FaMoon />}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}  

export default Navigation;