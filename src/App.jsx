import React from 'react'
import Hero from './components/pages/home/Hero.jsx'
import Navbar from './components/Navbar'
import AnimeResults from './components/pages/AnimeReasults/AnimeResults.jsx'; 
import Sidebar from './components/Sidebar.jsx';
import Watchlist from './components/pages/Watchlist/Watchlist.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div>
      <Router>
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <Routes>
            {/* Your Landing Page */}
            <Route path="/" element={<Hero/>} />
            
            {/* Your New Results Page */}
            <Route path="/results" element={<AnimeResults />} />

            {/* watchlist page */}
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </Router> 
    </div>
  )
}

export default App