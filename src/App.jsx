import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state/
import Navigation from './components/Navigation';
import Rootlayout from './pages/Rootlayout';
import LoginPage from './pages/LoginpPage';
import { Errorpage } from './pages/Errorpage';
import Results from './pages/Results';
import Candidate from './pages/Candidate';
import ElectionPage from './pages/ElectionPage';
import { ElectionDetails } from './pages/ElectionDetails';
import ConfirmVote from './components/ConfirmVote'; // Modal component
import Congrats from './pages/Congrats';

const App = () => {
  // Access the modal state from Redux
  const isModalOpen = useSelector((state) => state.ui.voteCandidateModalshowing);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Rootlayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/congrats" element={<Congrats/>} />
        <Route path="/elections" element={<ElectionPage />} />
        <Route path="/elections/:id" element={<ElectionDetails />} />
        <Route path="/elections/:id/candidates" element={<Candidate />} />
      </Routes>

      {/* Conditionally render the ConfirmVote modal */}
      {isModalOpen && <ConfirmVote />}
    </>
  );
};

export default App;