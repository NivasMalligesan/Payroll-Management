import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-light">
        <Navbar/>
        <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[550px] py-10" >
            {/*Info*/}

            <div className='relative z-20 flex flex-col justify-center py-14 md:py-0 col-span-2'>
                <div className='space-y-5 text-center md:text-left lg:max-w-[400] me-10'>
                    <h1 className="text-6xl lg:text-6xl font-bold !leading-snug">Global Payroll <br />
                    Platform Made For <br /> <span className='text-blue'> Employees</span></h1>
                    <p className='!leading-snug font-medium'>Easily payroll management, taxes, and compliance with a seamless experience.</p>
                        <div className='flex justify-center md:justify-start '>
                            <button className='flex items-center gap-2 primary-button group'>
                            Get Started
                            <FaArrowRight className='duration-300 text-l group-hover::translate-x-2 group-hover:-rotate-45'/>
                            </button>
                        </div>
                </div>
            </div>
            {/* hero image*/}
            <img
            alt="Product screenshot"
            src={hero}
            width={2432}
            height={1200}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:object-cover md:-ml-4 lg:-ml-0 
                        transition-transform duration-300 ease-in-out hover:-translate-x-20 "
            />
        </div>
    </section>
  )
}

export default Hero