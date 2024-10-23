import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/features/Features';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar setOpenModal={setOpenModal} /> 
      <Hero />
      <Features />
      {openModal && <Modal setOpenModal={setOpenModal} />} 
    </main>
  );
};

export default App;
