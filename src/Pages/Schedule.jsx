import React from 'react';

const Schedule = () => {
  return (
    <div id='agenda' className="max-w-4xl h-screen mx-auto mt-8">
      <div className="flex flex-col space-y-4">
        <div className="bg-gray-200 rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Morning Session</h2>
          <ul>
            <li className="flex justify-between">
              <span>9:00 - 9:30</span>
              <span>Opening Ceremony</span>
            </li>
            <li className="flex justify-between">
              <span>9:30 - 9:50</span>
              <span>Talk 1: Navigating the Digital Frontier</span>
            </li>
            <li className="flex justify-between">
              <span>10:00 - 10:30</span>
              <span>Talk 2: Unveiling the mystery of Quantum Computing</span>
            </li>
            <li className="flex justify-between">
              <span>10:30 - 11:30</span>
              <span>Algerian Women in Tech: Opportunities, obstacles and experience sharing</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Afternoon Session</h2>
          <ul>
            <li className="flex justify-between">
              <span>13:00 - 13:45</span>
              <span>Talk 3: Navigating the Landscape of Large Language Models</span>
            </li>
            <li className="flex justify-between">
              <span>13:50 - 14:50</span>
              <span>Panel 2: WTM Ambassadors Panel</span>
            </li>
            <li className="flex justify-between">
              <span>15:00 - 16:00</span>
              <span>Challenge: Prompting Engineering</span>
            </li>
            <li className="flex justify-between">
              <span>16:00 - 16:30</span>
              <span>Closing Ceremony</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
