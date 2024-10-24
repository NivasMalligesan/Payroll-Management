import React from 'react';
import { MdMenu } from 'react-icons/md';

const Navbar = ({ setOpenModal }) => {
  return (
    <nav>
      <div className='container flex items-center justify-between py-4 shadow-sm'>
        {/* Logo Section */}
        <div>
          <h1 className='text-2xl font-bold'>Payroll</h1>
        </div>
        {/* Login Menu */}
        <div className='hidden lg:block'>
          <button 
            className='secondary-button' 
            onClick={() => setOpenModal(true)} // Open modal on click
          >
            Login
          </button>
          <button className='fade-button bg-grey'>Learn More</button>
        </div>
        {/* Mobile Menu Options */}
        <div className='lg:hidden'>
          <MdMenu className='text-4xl' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
