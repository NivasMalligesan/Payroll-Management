import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Taxes from '../../assets/taxes.png';

const Homefeatures = () => {
  return (
    <>
      <div className="p-8">
        {/* Cards Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[350px] max-w-[450px]">
            <p className="text-sm text-gray-500">EMPLOYEE'S NET PAY</p>
            <h2 className="text-2xl font-medium">₹ 1,28,000.234</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[350px] max-w-[450px]">
            <p className="text-sm text-gray-500">LAST PAYMENT DATE</p>
            <h2 className="text-2xl font-medium">18TH OCTOBER 2024</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-[#67A1FF] text-white shadow-md rounded-lg p-8 flex-1 min-w-[350px] max-w-[450px] flex items-center justify-between">
            <div>
              <p className="text-sm">UPCOMING PAYMENT DATE</p>
              <h2 className="text-2xl font-medium">April 1st, 2022</h2>
            </div>
            <FaCalendarAlt size={32} className="flex-shrink-0" />
          </div>
        </div>

        {/* Deduction Section */}
        <div className="mt-10 bg-yellow-200  ">
          <div>
          <div className="flex flex-wrap gap-6 justify-evenly w-[780px] py-4 ">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[200px] max-w-[250px]">
            <p className="text-sm text-gray-500">EMPLOYEE'S NET PAY</p>
            <h2 className="text-2xl font-medium">₹ 1,28,000.234</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[200px] max-w-[250px]">
            <p className="text-sm text-gray-500">LAST PAYMENT DATE</p>
            <h2 className="text-2xl font-medium">18TH OCTOBER 2024</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[200px] max-w-[250px]">
              <p className="text-sm">UPCOMING PAYMENT DATE</p>
              <h2 className="text-2xl font-medium">April 1st, 2022</h2>
            </div>
        </div>
          </div>
        
          

        
        </div>
      </div>
    </>
  );
};

export default Homefeatures;
