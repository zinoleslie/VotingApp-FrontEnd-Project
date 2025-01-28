import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navigation() {
  const [Darktheme, setDarktheme] = useState(localStorage.getItem('voting-app-theme'));
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle theme function
  const handleToggle = () => {
    if (localStorage.getItem('voting-app-theme') === 'dark') {
      localStorage.setItem('voting-app-theme', '');
    } else {
      localStorage.setItem('voting-app-theme', 'dark');
    }
    setDarktheme(localStorage.getItem('voting-app-theme'));
  };

  useEffect(() => {
    document.body.className = localStorage.getItem('voting-app-theme');
  }, [Darktheme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const styles = {
    Pagename: {
      marginLeft: "-10px",
      fontSize: "30px",
      fontWeight: "700",
      color: "#fff"
    },
    toggleBtn: {
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "25px",
      cursor: "pointer"
    },
    navbar: {
      backgroundColor: "rgb(18, 27, 82)",
      color: '#fff',
    },
    dropdownMenu: {
      position: "absolute",
      top: "60px",
      right: "10px",
      background: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      padding: "10px",
      width: "200px",
      display: showDropdown ? "block" : "none",
      transition: "opacity 0.3s ease-in-out",
      zIndex: 1000,
    },
    dropdownItem: {
      padding: "10px",
      fontSize: "16px",
      color: "#333",
      textDecoration: "none", // Removes underline
      display: "block",
      transition: "background 0.3s",
      borderRadius: "5px",
    },
    dropdownItemHover: {
      backgroundColor: "#f0f0f0",
    }
  };

  return (
    <Navbar expand="lg" style={styles.navbar}>
      <Container>
        {/* Navbar brand */}
        <Navbar.Brand href="/" style={styles.Pagename}>
          <i>WebVote</i>
        </Navbar.Brand>

        {/* Custom Hamburger Icon and Theme Toggle */}
        <div className="d-lg-none d-flex align-items-center dropdown-container">
          <button style={styles.toggleBtn} onClick={handleToggle}>
            {Darktheme ? <FaSun /> : <FaMoon />}
          </button>
          <button style={styles.toggleBtn} onClick={() => setShowDropdown(!showDropdown)}>
            <FaBars />
          </button>

          {/* Custom Dropdown Menu */}
          {showDropdown && (
            <div style={styles.dropdownMenu}>
              <Link to="/elections" style={styles.dropdownItem} onClick={() => setShowDropdown(false)}>Elections</Link>
              <Link to="/results" style={styles.dropdownItem} onClick={() => setShowDropdown(false)}>Results</Link>
              <Link to="/logout" style={styles.dropdownItem} onClick={() => setShowDropdown(false)}>Logout</Link>
            </div>
          )}
        </div>

        {/* Centered Navigation Links (Visible on Large Screens) */}
        <Navbar.Collapse className="d-none d-lg-flex dropdownMenu">
          <nav className="mx-auto" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link to="/elections" className="fw-bold text-white navbardropdown" style={{ textDecoration: "none" }}>Elections</Link>
            <Link to="/results" className="fw-bold text-white navbardropdown" style={{ textDecoration: "none" }}>Results</Link>
            <Link to="/logout" className="fw-bold text-white navbardropdown" style={{ textDecoration: "none" }}>Logout</Link>
          </nav>
          
          {/* Theme Toggle (For Large Screens) */}
          <button style={styles.toggleBtn} onClick={handleToggle}>
            {Darktheme ? <FaSun /> : <FaMoon />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
