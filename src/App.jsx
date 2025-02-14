import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './components/Navigation';
// import Rootlayout from './pages/Rootlayout';
import LoginPage from './pages/LoginpPage';
import { Errorpage } from './pages/Errorpage';
import Results from './pages/Results';
import Candidate from './pages/Candidate';
import ElectionPage from './pages/ElectionPage';
import { ElectionDetails } from './pages/ElectionDetails';
import ConfirmVote from './components/ConfirmVote';
import Congrats from './pages/Congrats';
import HomePage from './pages/HomePage';
import Register from './pages/Resgister';
import Footer from './pages/Footer';
import Loader from './components/Loader';
import PageLogs from './pages/PageLogs';
// require('dotenv').config();



const App = () => {
  const isModalOpen = useSelector((state) => state.ui.voteCandidateModalshowing);
  const location = useLocation(); // Get the current route

  // Show navbar only if NOT on the homepage
  const showNavbar = location.pathname !== '/' && location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '*'



  return (
    <>

      <div className="app-container">
        <div className="main-container">
          {showNavbar && <Navigation />} {/* Navbar only appears after homepage */}


          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<PageLogs />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="/results" element={<Results />} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/loading" element={<Loader />} />
            <Route path="/elections" element={<ElectionPage />} />
            <Route path="/elections/:id" element={<ElectionDetails />} />
            <Route path="/elections/:id/candidates" element={<Candidate />} />
          </Routes>

          {isModalOpen && <ConfirmVote />}

          <Footer />
        </div>
      </div>


    </>
  );
};

export default App;
