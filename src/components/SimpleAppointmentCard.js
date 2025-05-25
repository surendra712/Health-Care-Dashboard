import React from 'react';

function SimpleAppointmentCard({ title, time, date, icon, doctor }) {
  return (
    <div className="simple-appointment-card">
      <div className="simple-appointment-icon">
        {icon}
      </div>
      <div className="simple-appointment-content">
        <div className="simple-appointment-title">{title}</div>
        <div className="simple-appointment-time">
          {time} {doctor && `- ${doctor}`}
        </div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;