import React from "react";
import RegistrationBtn from "./Register.btn";
import green from "/green.svg";
import earthiwd from "/earth-iwd.svg";
import iwdmob from "/iwd-mob.svg";
import background from "/background.svg";
import CountdownTimer from "./Countdown.timer";

export default function Register() {
  const iwdDay = new Date(Date.UTC(2024, 4, 24, 15));

  return (
    <div id="register" className="overflow-hidden w-screen flex flex-col justify-end font-montserrat">
      <img src={background} alt="background" className="absolute -z-10 hidden lg:block "/>
      {window.innerWidth <= 912 ? (
        <img src={iwdmob} alt="earth" className="absolute -z-10 h-full pt-6 right-0 pl-4 z-0" />
      ) : (
        <img src={earthiwd} alt="earth" className="absolute -z-10 w-full z-0" />
      )}
      <div className="flex flex-col h-screen lg:h-auto xl:h-auto 2xl:h-screen items-center justify-center z-10">
        <div className="font-bold text-5xl xl:text-[100px] text-center xl:mt-20 mt-8 mb-14 xl:mb-20">
          Save Your <br /> Place !
        </div>
        <div className="flex gap-1 mb-6 xl:mb-10">
          <img src={green} alt="green"/>
          <div className="text-xl text-center">
            May 4, 2024 at ESI Algiers
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
