import React from 'react';
import Profile from '../../assets/Profile.jpg';

const Homebanner = () => {
  return (
    <div className="container mx-auto h-auto min-h-[150px] flex flex-wrap items-center justify-between bg-white p-6 gap-6">
      {/* Left Section - Welcome Text */}
      <div className="flex-1 ps-2 flex flex-col gap-1">
        <h1 className="text-3xl sm:text-4xl font-semibold">Welcome</h1>
        <h2 className="text-xl sm:text-2xl font-medium">Nivas M R !!</h2>
        <p className="text-sm font-medium text-gray-500">
          It's Friday, 18th October 2024
        </p>
      </div>

      {/* Right Section - Role Badge and Profile Image */}
      <div className="flex items-center gap-4">
        <h1 className="text-sm sm:text-md font-semibold bg-gray-200 px-3 py-1 rounded-3xl">
          Data Scientist
        </h1>
        <img
          src={Profile}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Homebanner;
