import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation'
import Rootlayout from './pages/Rootlayout'
import LoginPage from './pages/LoginpPage'
import { Errorpage } from './pages/Errorpage'
import Results from './pages/Results'
import ResultElection from './components/ResultElection'
import CandidateRating from './components/CandidateRating'

const App = () => {
  return (
    <>
    <Navigation/>
    
    <Routes>
      <Route path="/" element={<Rootlayout/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="*" element={<Errorpage/>} />
      <Route path="/results" element={<Results/>} />
      <Route path="/election" element={<CandidateRating/>} />
    </Routes>
    </>
    
  )
}

export default App