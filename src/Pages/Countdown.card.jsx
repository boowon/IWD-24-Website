/* eslint-disable react/prop-types */
//import React from 'react'

export default function CountdownCard({ time, type, color }) {
  return (
    <div className="flex flex-col gap-2 font-montserrat items-center justify-center">
      <div className={`w-20 h-20 lg:h-16 lg:w-16 xl:w-20 xl:h-20 bg-${color} text-2xl lg:text-xl xl:text-2xl text-center flex justify-center items-center rounded-md border-2 border-black`}>
        {time}
      </div>
      <p className="text-center text-md font-montserrat text-black">{type}</p>
    </div>
  )
}
