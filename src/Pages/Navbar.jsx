/* eslint-disable react/prop-types */
import wtm from '/WTM.svg'
import wtmshort from '/wtm-short.svg'
import { useState } from 'react';



function Navbar({activeSection}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  }
  return (
    <div>
      <div className='lg:hidden w-screen overflow-y-hidden fixed z-[1005] top-0 bg-transprent flex justify-between items-center pt-3'>
        <div className="pl-2 block flex-shrink-0">
          <a href="#" className="text-white font-bold text-xl pt-1"> 
            <img className='' src={wtmshort} alt="WTM" />
          </a>
        </div>
        <button id="hamburger-button" onClick={toggleMenu} className={`h-8 w-8 mr-4 cursor-pointer text-3xl pt-3 pr-2 ${isOpen ? 'toggle-btn' : null}`}>
          <div className={`absolute h-1 top-4 mt-5 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']`}>
          </div>
        </button>
      </div>
      <section id="mobile-menu" onClick={toggleMenu} className={`fixed z-[1000] top-0 left-0 lg:hidden w-full h-full bg-white ${isOpen ? 'flex' : 'hidden' } w-full origin-top animate-open-menu flex-col content-evenly items-center justify-center text-5xl`}>
        <nav className="flex absolute min-h-screen flex-col items-center py-8 content-evenly justify-center gap-4 bg-white" aria-label="mobile">
          <a href="#home" className={activeSection === 'home' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'} >Home</a>
          <hr className='h-1 w-[60vw] border-gray-500'/>
          <a href="#about" className={activeSection === 'about' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>About</a>        
          <hr className='h-1 w-[60vw] border-gray-500'/>
          <a href="#faq" className={activeSection === 'faq' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>FAQ</a>
          <hr className='h-1 w-[60vw] border-gray-500'/>
          <a href="#quiz" className={activeSection === 'quiz' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>Quiz</a>
          <hr className='h-1 w-[60vw] border-gray-500'/>
          <a href="#register" className={activeSection === 'register' ? 'text-green hover:text-light-green' : 'text-blue hover:text-light-blue'}>Register</a>      
        </nav>
      </section>
      <nav className="fixed w-[100%] top-0 z-50 font-montserrat text-2xl font-medium hidden lg:block">
        <div className=" pt-5 px-4 lg:py-10 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
          <div className="block flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl"> 
              <img className='' src={wtm} alt="WTM" />
                  </a>
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
      </nav>
    </div>
  );
}

export default Navbar;
