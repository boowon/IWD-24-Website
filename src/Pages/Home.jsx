import React from 'react'
import RegistrationBtn from './Register.btn'
import green from '/green.svg'
import world from '/world.svg'
import line1 from '/line-1.svg'
import line2 from '/line-2.svg'

import map from '/map.svg'
import {motion} from 'framer-motion'

import CountdownTimer from './Countdown.timer'

export default function Home() {
        const iwdDay = new Date(Date.UTC(2024, 3, 29, 15));

  return (
    <div id='home' className='flex flex-col lg:gap-9 h-[100vh] overflow-hidden font-montserrat relative'>
        <div className="flex flex-col relative lg:hidden justify-end items-end ">
                <img className=' -z-50' src={line1} alt="" />
                <motion.img      
                animate={{
                        rotate: 360,
                        }}
                transition={{
                        delay: 1,
                        loop: Infinity, 
                        duration: 2,
                        ease: "linear",
                        }}  
                className=' px-10 -z-50' src={world} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center relative">
        <div className='flex justify-center items-center lg:items-start w-3/4 lg:px-14 flex-col gap-9'>
                <div className='font-bold text-5xl lg:text-6xl xl:text-[100px]'>Impact <br /> the Future</div>
                <div className="flex flex-col items-center lg:items-start gap-9 pb-10 lg:pb-0 lg:gap-14">
                <div className=' text-lg lg:text-2xl xl:text-3xl font-medium'>International Women’s Day 2024</div>
                <div className="gap-1 hidden lg:flex">
                        <img src={green} alt="green" />
                        <div className='xl:text-xl lg:text-lg'>April 20, 2024 at ESI Algiers</div>
                </div>
        <div className="relative flex justify-center  lg:absolute lg:top-[50%] lg:left-[60%]">
                <hr className="border-t-2 absolute -z-50 top-[22%] lg:hidden w-screen  border-black my-4" />
                <CountdownTimer targetDate={iwdDay}></CountdownTimer>
        </div>
           <RegistrationBtn></RegistrationBtn>
        </div>
        </div>
        <img className='w-[50%] hidden lg:block -z-50' src={map} alt="" />
        </div>
        <div className="flex lg:hidden h-full ">
        <img className=' w-1/2 sm:w-1/3 -z-50' src={line2} alt="" />
        </div>
    </div>
  )
}
