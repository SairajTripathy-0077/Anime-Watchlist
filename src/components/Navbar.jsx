import React from "react";
import SearchBar from "./SearchBar.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="bg-white border-b-4 border-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-2 h-20 flex justify-between items-center">
        
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-6 md:-translate-x-[7em]">
          
          {/* Hamburger */}
          <button
            onClick={onMenuClick}
            className="text-3xl hover:scale-110 transition"
          >
            <GiHamburgerMenu />
          </button>

          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <span className="hidden md:block text-3xl font-clickUper tracking-widest uppercase">
              Otaku<span className="text-indigo-600">Den</span>
            </span>
          </div>

        </div>

        {/* RIGHT: Search */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
