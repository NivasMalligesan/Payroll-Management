import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/features/Features'; // Import if required
import Modal from '../components/Modal/Modal';

const Landing_page = () => {
  const [openModal, setOpenModal] = useState(false); // State to manage modal

  return (
    <div className="landing-page">
      <Navbar setOpenModal={setOpenModal} /> {/* Navbar with modal trigger */}
      <Hero />
      <Features />
      {openModal && <Modal setOpenModal={setOpenModal} />} {/* Conditionally render modal */}
    </div>
  );
};

export default Landing_page;
