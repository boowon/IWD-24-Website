import React, { useState, useEffect } from 'react';
import TimingBox from './Timing.box';

export default function CountdownTimer({ targetDate }) {
        const [timeLeft, setTimeLeft] = useState(null);
    
        useEffect(() => {
            const calculateTimeLeft = () => {
                const difference = targetDate.getTime() - Date.now();
    
                if (difference > 0) {
                    setTimeLeft({
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
                        minutes: Math.floor((difference / (1000 * 60)) % 60).toString(),
                        seconds: Math.floor((difference / 1000) % 60).toString()
                    });
                } else {
                    setTimeLeft(null);
                }
            };
    
            calculateTimeLeft();
    
            const timer = setInterval(calculateTimeLeft, 1000);
    
            return () => clearInterval(timer);
        }, [targetDate]);
    
        if (!timeLeft) {
            return <div>Countdown ended!</div>;
        }
    
        return (
            <TimingBox days={timeLeft.days} hours={timeLeft.hours} mins={timeLeft.minutes}></TimingBox>
        );
    }