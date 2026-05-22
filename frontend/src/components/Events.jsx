// src/components/Events.jsx
import React from "react";
import eventsData from "../data/events";

function Events() {
  console.log(eventsData[0].image)
  return (
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-300 mb-12">
          Upcoming Events
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="glass p-4 transition-all hover:glow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold text-purple-400 mt-4">
                {event.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                {event.description}
              </p>
              <p className="text-xs text-gray-500 mt-4">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Events;
