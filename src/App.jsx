/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Quiz from './Pages/QUIZ';
import Register from './Pages/REGISTER';
import Talks from './Pages/Talks';

function App() {
    const [activeSection, setActiveSection] = useState('quiz');

    useEffect(() => {
        const sections = document.querySelectorAll("div[id]");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, {
          rootMargin: "-50% 0px -50% 0px" // Adjust root margin as needed
        });
      
        sections.forEach((section) => {
          observer.observe(section);
        });
      
        return () => {
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
    }, []);

    return (
        <div className='overflow-x-hidden w-screen'>
           <Navbar activeSection={activeSection}></Navbar>
           <Home></Home>
           <About></About>
           <Talks></Talks>
           {/*<FAQ></FAQ>--->*/}
           <Quiz></Quiz>
           <Register></Register>  
        </div>
    );
}

export default App;
