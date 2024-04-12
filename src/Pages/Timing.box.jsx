import React from 'react'
import CountdownCard from './Countdown.card'

export default function TimingBox({days, hours, mins}) {
  return (
        <div className='flex gap-4 items-center justify-center'>
               <CountdownCard type={'Days'} time={days} color={'bg-green'}></CountdownCard>
               <CountdownCard type={'Hours'} time={hours} color={'bg-white'}></CountdownCard>
               <CountdownCard type={'Mins'} time={mins} color={'bg-light-blue'}></CountdownCard>
        </div>
  )
}
