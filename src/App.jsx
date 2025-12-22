import React from 'react'
import Hero from './components/home/Hero.jsx'
import Navbar from './components/Navbar'
import AnimeResults from './components/AnimeResults.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

const App = () => {
  return (
    <div>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <Routes>
            {/* Your Landing Page */}
            <Route path="/" element={<Hero/>} />
            
            {/* Your New Results Page */}
            <Route path="/results" element={<AnimeResults />} />
          </Routes>
        </div>
      </Router> 
    </div>
  )
}

export default App