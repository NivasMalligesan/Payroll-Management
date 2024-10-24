import React from 'react';
import Sidebar, { SidebarItems } from '../components/Sidebar/Sidebar';
import { BadgeDollarSignIcon, CheckSquare2Icon, DollarSignIcon, FileText, Home, LayoutDashboard, LucidePiggyBank, PiggyBank, PiggyBankIcon, UserRoundCheck } from 'lucide-react';
import Homebanner from '../components/Homefeatures/Homebanner'
import Homefeatures from '../components/Homefeatures/Homefeatures'

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItems icon={<Home size={25} />} text="Home" alert />
        <SidebarItems icon={<LayoutDashboard size={25} />} text="Dashboard" />
        <SidebarItems icon={<BadgeDollarSignIcon size={25} />} text="Salary Details"/>
        <SidebarItems icon={<PiggyBank size={25} />} text="Tax Deductions"/>
        <SidebarItems icon={<UserRoundCheck size={25} />} text="Leave & attendance"/>
        <SidebarItems icon={<FileText size={25} />} text="Documents"/>
      </Sidebar>
      <div className="flex flex-col w-full">
        <Homebanner />
        <div className="mt-0"> {/* Adds spacing between Homebanner and Homefeatures */}
          <Homefeatures />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
