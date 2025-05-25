import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { appointments } from '../data/appointments';

function UpcomingSchedule() {
  // Group appointments by day
  const groupAppointmentsByDay = () => {
    const grouped = {};
    
    appointments.forEach(appointment => {
      if (appointment.status === 'upcoming') {
        const date = new Date(appointment.date);
        const day = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
        
        // Get day name
        let dayName;
        switch (day) {
          case 4: dayName = 'Thursday'; break;
          case 6: dayName = 'Saturday'; break;
          case 3: dayName = 'Wednesday'; break;
          case 5: dayName = 'Friday'; break;
          default: dayName = 'Other';
        }
        
        if (!grouped[dayName]) {
          grouped[dayName] = [];
        }
        
        grouped[dayName].push(appointment);
      }
    });
    
    return grouped;
  };
  
  const appointmentsByDay = groupAppointmentsByDay();
  
  // Get icon for appointment type
  const getAppointmentIcon = (type) => {
    switch (type) {
      case 'Eye Exam':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'Heart Checkup':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        );
      case 'Brain Scan':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 17H4a1 1 0 0 1-1-1 2 2 0 0 1 2-2h.5"></path>
            <path d="M2.5 10.5a3 3 0 1 1 5 2.5"></path>
            <path d="M12 6.5a2 2 0 1 1 0 5 2 2 0 0 1 0-5Z"></path>
            <path d="M19 16v-1a2 2 0 0 0-2-2h-1.5"></path>
            <path d="M19.5 9.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"></path>
            <path d="M12 13.5a2 2 0 1 0 0 5 2 2 0 0 0 0-5Z"></path>
          </svg>
        );
      case 'Teeth Cleaning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5.5c-1.074-.586-2.583-.576-3.5.044-2.28 1.544-1.5 5.706-1.5 5.706s-2.218.044-3.5-1.5c-1.282-1.544-1.579-4.75.5-6.5s5.219-1.8 6.5-.5"></path>
            <path d="M10.5 10.5c-.5.5-1.207 2.5-1.207 3.5 0 1.5 1.5 2 2.5 2s2.5-.5 2.5-2c0-1-.5-2.5-1.5-3.5"></path>
            <path d="M12 5.5c1.074-.586 2.583-.576 3.5.044 2.28 1.544 1.5 5.706 1.5 5.706s2.218.044 3.5-1.5c1.282-1.544 1.579-4.75-.5-6.5s-5.219-1.8-6.5-.5"></path>
          </svg>
        );
      case 'Physical Therapy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
    }
  };
  
  return (
    <section className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      
      {Object.entries(appointmentsByDay).map(([day, dayAppointments]) => (
        <div key={day} className="upcoming-day-group">
          <div className="upcoming-day-title">On {day}</div>
          
          {dayAppointments.map(appointment => (
            <div key={appointment.id} className="simple-appointment-card">
              <div className="simple-appointment-icon">
                {getAppointmentIcon(appointment.type)}
              </div>
              <div className="simple-appointment-content">
                <div className="simple-appointment-title">{appointment.title}</div>
                <div className="simple-appointment-time">{appointment.time} - {appointment.doctor}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;
