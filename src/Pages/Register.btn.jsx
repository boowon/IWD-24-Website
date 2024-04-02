/* eslint-disable no-unused-vars */
import React from 'react'
import flowers from '/flowers.svg'
import { motion } from "framer-motion"

export default function RegistrationBtn() {
  return (
  <motion.div
  whileHover={{
        scale: 1.1,
  }} 
  className="btn flex justify-center items-center w-[200px] h-[62px] relative overflow-hidden">
      
        <a
        href="GOOGLE_FORM_URL_HERE"
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green flex w-[200px] h-[62px] rounded-md text-xl text-center justify-center items-center text-black font-montserrat "
       >
                <img src={flowers} alt="flowers" className='absolute' />
                 Register
      </a>
  </motion.div>
  )
}
