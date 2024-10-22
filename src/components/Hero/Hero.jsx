import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-light">
        <Navbar/>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px]" >
            {/*Info*/}

            <div className='relative z-20 flex flex-col justify-center py-14 md:py-0'>
                <div className='space-y-5 text-center md:text-left lg:max-w-[400] me-10'>
                    <h1 className="text-6xl lg:text-6xl font-bold !leading-snug">Global Payroll <br />
                    Platform Made For <br /> <span className='text-blue'> Employees</span></h1>
                    <p className='!leading-snug font-medium'>Easily automate payroll, taxes, and compliance with a seamless experience.</p>
                        <div className='flex justify-center md:justify-start '>
                            <button className='flex items-center gap-2 primary-button group'>
                            Get Started
                            <FaArrowRight className='duration-300 text-l group-hover::translate-x-2 group-hover:-rotate-45'/>
                            </button>
                        </div>
                </div>
            </div>
            {/* hero image*/}
            <div className='flex items-center justify-end'>
                <img src={hero} alt="" className=' rounded-lg W-[1000px] xl:w-[700px] relative z-10 drop-shadow' />
            </div>
        </div>
    </section>
  )
}

export default Hero