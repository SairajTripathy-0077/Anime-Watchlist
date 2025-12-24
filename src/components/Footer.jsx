import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="w-full bg-black h-auto overflow-x-hidden">
        <div className="flex items-center justify-center mt-10 mb-7">
            <h2 className='text-4xl text-white font-clickUper uppercase'>otaku den</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-300 mt-20 mb-20">
            {/* basic contact info like email,no., */}
            <div className='mb-10 md:mb'>
                <div className="flex items-center justify-center p-3 mb-5">
                    <h2 className='text-2xl text-white font-clickUper uppercase'>CONTACT INFO</h2>
                </div>
                <div className="grid grid-cols-2 pb-2 mb-2">
                    <span className='text-xl text-white justify-self-end'>Contact Number&nbsp;: &nbsp; </span>
                    <a href="tel:+919040006850" className='text-xl text-white hover:text-blue-700'>+91 9040006850</a>
                </div>
                <div className="grid grid-cols-2 pb-2 mb-2 -translate-x-[4em] md:translate-x-0">
                    <span className='text-xl text-white justify-self-end'>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; </span>
                    <a href="mailto:sairajtripathy4@example.com" className='text-xl text-white hover:text-blue-700'> sairajtripathy4@gmail.com</a>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center p-3 mb-5">
                    <h1 className='text-2xl text-white font-clickUper uppercase'>SOCIALS</h1>
                </div>
                <div className='invert flex items-center justify-center p-3 mb-5'>
                    <button className='px-4' onClick={() => window.open('https://github.com/SairajTripathy-0077', '_blank')}><FaGithub size={50} className='hover:scale-105' /></button>
                    <button className="px-4" onClick={() => window.open('https://www.linkedin.com/in/sairaj-tripathy-b54263381/', '_blank')}><FaLinkedin size={50} className='hover:scale-105'/></button>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center mt-4 mb-7">
            <h2 className='text-base text-white font-sans'>© 2025 Otaku-Den. Anime data & images belong to their respective owners.</h2>
        </div>
    </footer>
  )
}

export default Footer