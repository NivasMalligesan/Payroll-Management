import React from 'react'
import { MdMenu } from "react-icons/md";



const Navbar = () => {
  const  [showModal, setShowModal] = React.useState(false);

  return (
    <nav>
        <div className='container flex items-center justify-between py-4 shadow-sm item'>
            {/*logo Section */}
            <div>
                <h1 className='text-2xl font-bold '>Payroll</h1>
            </div>
            {/*login menu */}
            <div className='hidden lg:block'>
                <button className='secondary-button'>Login</button>
                <button className='fade-button'>Learn More</button>
            </div>
            {/*Mobile Menu OPtions */}
            <div className='lg:hidden'>
              <MdMenu className='text-4xl'/>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar