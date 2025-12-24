import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[17rem] bg-white border-x-4 border-black z-50
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* title */}
        <div className="bg-white py-5 border-b-4 border-black">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-3xl px-2 hover:scale-110 transition"
            >
              <GiHamburgerMenu />
            </button>
            {/* logo */}
            <div
              className="cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <span className="text-3xl font-clickUper tracking-widest uppercase">
                Otaku<span className="text-indigo-600">Den</span>
              </span>
            </div>
          </div>
        </div>
        {/* watchlist page button */}

        <div 
        onClick={() => {navigate('/'); onClose(); window.location.reload();}}
        className="translate-y-[7rem] py-2 mb-4 flex items-center justify-center bg-gray-900 cursor-pointer hover:bg-slate-500 text-gray-200 hover:text-black">
          <span className="text-3xl font-clickUper tracking-widest uppercase">Home</span>
        </div>
        <div 
        onClick={() => {navigate('/watchlist'); onClose();}}
        className="translate-y-[7rem] py-2 flex items-center justify-center bg-gray-900 cursor-pointer hover:bg-slate-500 text-gray-200 hover:text-black">
          <span className="text-3xl font-clickUper tracking-widest uppercase">Watchlist</span>
        </div>


      </aside>
    </>
  )
}

export default Sidebar