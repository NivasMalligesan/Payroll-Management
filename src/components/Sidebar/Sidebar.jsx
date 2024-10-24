import React, { createContext, useContext, useState } from 'react';
import Logo from '../../assets/Logo.png';
import { ArrowLeft, MoreVertical, ArrowRight } from 'lucide-react';

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-xl ">
        
        {/* Header Section */}
        <div className="p-4 pb-2 flex items-center justify-between">
          <img
            src={Logo}
            alt="Company Logo"
            className={`overflow-hidden transition-all ${expanded ? 'w-[35px]' : 'w-0' }`}/>
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 duration-300" onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>


        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-4">{children}</ul>
        </SidebarContext.Provider>

     
        <div className="border-t p-3 flex">
          <img
            src={Logo}
            alt="Profile Picture"
            className="w-[35px] rounded-md"
          />
          <div
            className={`flex ml-3 items-center justify-between overflow-hidden transition-all ${
              expanded ? 'w-52 ml-3' : 'w-0'
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Nivas</h4>
              <span className="text-xs text-gray-600">
                nivasmalligesan@gmail.com
              </span>
            </div>
            <MoreVertical size={20} className="ml-auto" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

export function SidebarItems({ icon, text, active, alert = false }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? 'bg-gradient-to-tr from-gray-50 to-gray-100'
          : 'hover:bg-gray-200 text-black'
      }`}
    >{icon}
    <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 opacity-0"}`}>{text}</span>
      
    </li>
  );
}


