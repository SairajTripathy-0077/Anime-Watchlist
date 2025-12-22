import React from 'react'
import Navbar from '../Navbar'
import trio from '../../assets/trio.png'
import goku from '../../assets/goku.png'
import B1 from '../../assets/B1.png'
import B2 from '../../assets/B2.png'
import B3 from '../../assets/B3.png'
import B4 from '../../assets/B4.png'
import B5 from '../../assets/B5.png'
import B6 from '../../assets/B6.png'
import './Hero.css'
import {motion, scale, spring} from 'framer-motion'
import TopAnime from './TopAnime'


const Hero = () => {
  const columnImages = [
  [B1, B2],        // column 1
  [B3, B4],        // column 2
  [B4, B6],        // column 3
  [B1, B2],        // column 4
  [B5, B6],        // column 5
  ]
const isMobile = window.innerWidth < 768;
  return (
    <main >
      <div className='overflow-hidden'>
          {/* Hero Section */}
          <section className="bg-slate-950 w-screen relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 25,
                  duration: 0.6,
                }}
                className="absolute inset-x-0 top-20 flex justify-center z-20"
              >
                <h1 className="text-8xl md:text-9xl uppercase font-minecraft text-yellow-400 text-center">
                  Otaku Den
                </h1>
              </motion.div>
            </div>
            <div className="relative w-screen h-[calc(100vh-80px)] overflow-hidden flex justify-center items-end">
                {/* Background infinite columns */}
                <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 px-1 md:px-5 md:-translate-x-2 overflow-hidden z-0">
                  {columnImages.map((images, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex flex-col ${
                        colIndex % 2 === 0 ? "animate-scrollY" : "animate-scrollYReverse"
                      } opacity-80`}
                    >
                      {[...images, ...images].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className="w-full object-cover px-2 md:px-4"
                        />
                      ))}
                    </div>
                  ))}
                </div>


                <motion.img 
                    initial = {{opacity: 0, y:300}}
                    whileInView = {{opacity:1, y:isMobile? -10 :0, scale: 1, x:isMobile? 20:30}}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                    }}
                    src={goku} 
                    alt="Goku" 
                    className="absolute bottom-0 h-[50%] md:h-[90%] lg:h-[100%] object-contain z-20 translate-x-3 md:translate-x-7" 
                />

                <motion.img 
                    initial = {{opacity: 0, y:isMobile? 150:200}}
                    whileInView = {{opacity:1, y:isMobile? 0:0, scale: 1}}
                    transition={{
                      duration: 1.5,
                      type: spring,
                      stiffness: 20
                    }}
                    src={trio} 
                    alt="Trio" 
                    className="absolute bottom-0 md:h-[70%] object-contain z-30" 
                />

            </div>
          </section>
      </div>
          <section className="h-screen">
            <div class="fixed inset-0 bg-halftone pointer-events-none z-0"></div>
            <TopAnime />
          </section>
    </main>
  )
}

export default Hero