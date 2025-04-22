import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/EventCalendar.css"; // Import the CSS file for styling

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="event-calendar-container">
      <Calendar onChange={onChange} value={value} />
      <div className="event-calendar-header">
        <h1 className="event-calendar-title">Events</h1>
        <img src="/moreDark.png" alt="more options" width={20} height={20} />
      </div>
      <div className="event-calendar-events">
        {events.map((event, index) => (
          <div
            className={`event-card ${index % 2 === 0 ? "sky-border" : "purple-border"}`}
            key={event.id}
          >
            <div className="event-card-header">
              <h1 className="event-title">{event.title}</h1>
              <span className="event-time">{event.time}</span>
            </div>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
