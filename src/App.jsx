import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/features/Features';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [openModal, setOpenModal] = useState(false); // State to control modal

  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar setOpenModal={setOpenModal} /> {/* Pass state setter to Navbar */}
      <Hero />
      <Features />
      {openModal && <Modal setOpenModal={setOpenModal} />} {/* Show Modal */}
    </main>
  );
};

export default App;
