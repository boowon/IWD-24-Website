import React from "react";
import RegistrationBtn from "./Register.btn";
import green from "/green.svg";
import earthiwd from "/earth-iwd.svg";
import iwdmob from "/iwd-mob.svg";
import background from "/background.svg";
import CountdownTimer from "./Countdown.timer";


export default function Register() {
  const iwdDay = new Date(Date.UTC(2024, 3, 27, 15));

  return (
    <div id="register" className="h-screen flex flex-col justify-end overflow-hidden font-montserrat">
      <img src={background} alt="background" className="absolute hidden lg:block" />
      <img src={window.innerWidth <= 768 ? iwdmob : earthiwd} alt="earth" className="absolute w-full pl-4 z-0" />
      <div className="flex flex-col h-screen lg:h-auto xl:h-auto 2xl:h-screen items-center justify-center z-10">
        <div className="font-bold text-5xl xl:text-[100px] text-center xl:mt-20 mt-8 mb-14 xl:mb-20">
          Save Your <br /> Place !
        </div>
        <div className="flex gap-1 mb-6 xl:mb-10">
          <img src={green} alt="green"/>
          <div className="text-xl text-center">
            April 27, 2024 at ESI Algiers
          </div>
        </div>
        <CountdownTimer targetDate={iwdDay}></CountdownTimer>
        <div className="mt-10 xl:mt-20 lg:mb-10 2xl:mb-0">
          <RegistrationBtn/>
        </div>
      </div>
    </div>
  );
}
