import React from 'react'
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  return (
    <nav className="bg-white border-b-4 border-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.location.reload()}>
              <span className="text-3xl font-clickUper tracking-widest uppercase">Otaku<span className="text-indigo-600">Den</span></span>
          </div>
          <div>
            {/* SearchBar */}
            <SearchBar />
          </div>
      </div>
  </nav>
)
}

export default Navbar