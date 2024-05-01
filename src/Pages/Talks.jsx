import React, { useState, useEffect } from 'react';

const Talks = () => {
  // Sample data for events
  const events = [
    {
      id: 1,
      title: 'Keynote Address',
      date: 'April 30, 2024',
      speaker: 'John Doe',
      speakerImage: 'speaker1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies pretium erat, in euismod mi eleifend ac. Integer id ante sed velit cursus sollicitudin. Proin eu ex id nisi placerat gravida. Sed ullamcorper neque sit amet nibh cursus, nec interdum neque varius.'
    },
    {
      id: 2,
      title: 'Panel Discussion',
      date: 'May 1, 2024',
      speaker: 'Jane Smith',
      speakerImage: 'speaker2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies pretium erat, in euismod mi eleifend ac. Integer id ante sed velit cursus sollicitudin. Proin eu ex id nisi placerat gravida. Sed ullamcorper neque sit amet nibh cursus, nec interdum neque varius.'
    },
    // Add more events here as needed
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Block scroll when the window is open
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);

  const handleEventClick = (eventId) => {
    const event = events.find(event => event.id === eventId);
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div id='talks' className="h-screen w-screen container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Event Agenda</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {events.map(event => (
          <li key={event.id} onClick={() => handleEventClick(event.id)} className="cursor-pointer p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-sm">{event.date}</p>
          </li>
        ))}
      </ul>
      {selectedEvent && (
        <div className="fixed z-[1000]  inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-md">
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-sm mb-4">Date: {selectedEvent.date}</p>
            <div className="flex items-center mb-4">
              <img src={selectedEvent.speakerImage} alt={selectedEvent.speaker} className="w-10 h-10 rounded-full mr-2" />
              <p className="text-sm">{selectedEvent.speaker}</p>
            </div>
            <p className="text-sm">{selectedEvent.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Talks;
