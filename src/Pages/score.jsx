import React, { useState, useEffect } from 'react';

function ScoreProgress({ score, total }) {
  const radius = 65; // Adjust the radius as needed
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress circle when score changes
    if (score > 0) {
      const animationDuration = 1000; // Adjust animation duration as needed
      const progressIncrement = (score / total) * circumference;
      let startTime;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progressPercentage = Math.min(1, elapsedTime / animationDuration);
        setProgress(progressPercentage * progressIncrement);

        if (elapsedTime < animationDuration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [score, total, circumference]);

  return (
    <div className=''>
      <h1 className='font-bold mb-5 text-center text-3xl'>Your Score</h1>
      <svg className='relative h-full w-full'>
        {/* Outer circle */}
        <circle 
          stroke="#CAEDE3"
          fill="none"
          strokeWidth="15"
          r={radius}
          cx="50%"
          cy="50%"
        />
        {/* Progress circle */}
        <circle
          stroke="#1CE9B6"
          fill="none"
          strokeWidth="15"
          strokeLinecap="round"
          r={radius}
          cx="8.4%"
          cy="100%"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform="rotate(-90 50 50)" // Rotate the circle to start from the top
        />
        {/* Text */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className='font-bold'>
          {score}/{total}
        </text>
      </svg>
    </div>

  );
}

export default ScoreProgress;
