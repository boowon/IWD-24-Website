import React, { useState } from 'react';
import wtm from '/WTM.svg'
import wtmshort from '/wtm-short.svg'
import menu from '/ion_menu.svg'



function Navbar({activeSection}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky w-[100%] top-0 z-50  font-montserrat text-2xl font-medium">
      <div className=" pt-5 px-4 lg:py-10 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
        <div className="hidden lg:block flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl"> 
            <img className='' src={wtm} alt="WTM" />
                </a>
          </div>
          <div className="block lg:hidden flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl"> 
            <img className='' src={wtmshort} alt="WTM" />
                </a>
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-black hover:text-gray-300 focus:outline-none">
                <img className='h-12 w-12' src={menu} alt="" />
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="flex space-x-12">
              <a href="#home" className={activeSection === 'home' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'} >Home</a>
              <a href="#about" className={activeSection === 'about' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>About</a>
              <a href="#faq" className={activeSection === 'faq' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>FAQ</a>
              <a href="#quiz" className={activeSection === 'quiz' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>Quiz</a>
              <a href="#register" className={activeSection === 'register' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>Register</a>

            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 flex flex-col justify-center items-center space-y-1">
              <a href="#home" className={activeSection === 'home' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'} >Home</a>
              <a href="#about" className={activeSection === 'about' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>About</a>
              <a href="#faq" className={activeSection === 'faq' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>FAQ</a>
              <a href="#quiz" className={activeSection === 'quiz' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>Quiz</a>
              <a href="#register" className={activeSection === 'register' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>Register</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
