import React from 'react';

function ScoreProgressStand({ score, total }) {
  const radius = 38; // Adjust the radius as needed
  const circumference = 2 * Math.PI * radius;
  const progress = (score / total) * circumference;

  return (
    <svg className='' height="100" width="100">
      <circle
        stroke="#fff"
        fill="none"
        strokeWidth="14"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        stroke="#000"
        fill="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        r={radius}
        cx="50"
        cy="50"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        transform="rotate(-90 50 50)" // Rotate the circle to start from the top
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="20"
        fill="#000"
        fontWeight="bold"
      >
        {score}
      </text>
    </svg>
  );
}

export default ScoreProgressStand;
