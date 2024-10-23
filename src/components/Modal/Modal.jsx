import React from 'react';

const Modal = ({ setOpenModal }) => {
  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      onClick={() => setOpenModal(false)} // Close on background click
    >
      <form 
        className='bg-white p-10 rounded-md shadow-md w-[500px] h-[560px]'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
      >
        <div className='mt-10'>
          <h1 className='text-4xl font-medium text-primary_text text-center'>
            WELCOME BACK
          </h1>
          <p className='font-medium text-secondary_text text-center mt-2'>
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className='mt-8 w-80 mx-auto'>
          <h1 className='font-medium shadow-sm'>Email</h1>
          <input 
            type='text' 
            placeholder='Enter Your Email' 
            className='mt-2 border border-gray-200 w-full p-2 rounded-lg shadow-sm'
          />
        </div>
        <div className='mt-5 w-80 mx-auto'>
          <h1 className='font-medium shadow-sm'>Password</h1>
          <input 
            type='password' 
            placeholder='Enter your Password' 
            className='mt-2 border border-gray-200 w-full p-2 rounded-lg shadow-sm'
          />
        </div>
        <div className='mt-5 w-80 mx-auto flex items-center justify-between'>
          <div className='flex items-center'>
            <input type='checkbox' className='me-2 w-5 h-4 text-regular' />
            <h1 className='font-medium shadow-sm text-sm'>Remember Me</h1>
          </div>
          <a href='' className='text-sm font-medium'>Forgot Password</a>
        </div>
        <div className='flex justify-center mt-5'>
          <button 
            className='w-80 mt-2 bg-dark text-white p-2 rounded-xl shadow-md'
            onClick={() => setOpenModal(false)} // Close modal on sign-in
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
