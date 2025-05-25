import React from 'react';
import { calendarData } from '../data/healthData';
import { appointments } from '../data/appointments';

function CalendarView() {
  // Get today's date
  const today = new Date();
  const currentDay = today.getDate();
  
  // Find appointments for display
  const dentistAppointment = appointments.find(app => app.title === 'Dentist');
  const physioAppointment = appointments.find(app => app.title === 'Physiotherapy Appointment');
  
  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = calendarData.days;
    const startDay = calendarData.startDay;
    
    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      days.push({ day: '', isEmpty: true });
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const hasAppointment = calendarData.appointments.some(app => app.day === i);
      days.push({
        day: i,
        isEmpty: false,
        isToday: i === currentDay,
        hasAppointment
      });
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  // Split days into weeks
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }
  
  return (
    <section className="calendar-view">
      <h2>
        <span className="calendar-month">{calendarData.month} {calendarData.year}</span>
        <div className="calendar-controls">
          <button className="calendar-control-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="calendar-control-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </h2>
      
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>
                  {!day.isEmpty && (
                    <div className={`calendar-day ${day.isToday ? 'today' : ''} ${day.hasAppointment ? 'has-appointment' : ''}`}>
                      {day.day}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="calendar-appointments">
        <div className="calendar-appointment-card">
          <div className="calendar-appointment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5.5c-1.074-.586-2.583-.576-3.5.044-2.28 1.544-1.5 5.706-1.5 5.706s-2.218.044-3.5-1.5c-1.282-1.544-1.579-4.75.5-6.5s5.219-1.8 6.5-.5"></path>
              <path d="M10.5 10.5c-.5.5-1.207 2.5-1.207 3.5 0 1.5 1.5 2 2.5 2s2.5-.5 2.5-2c0-1-.5-2.5-1.5-3.5"></path>
              <path d="M12 5.5c1.074-.586 2.583-.576 3.5.044 2.28 1.544 1.5 5.706 1.5 5.706s2.218.044 3.5-1.5c1.282-1.544 1.579-4.75-.5-6.5s-5.219-1.8-6.5-.5"></path>
            </svg>
          </div>
          <div className="calendar-appointment-content">
            <div className="calendar-appointment-title">Dentist</div>
            <div className="calendar-appointment-time">10:00 AM - Dr. Davis</div>
          </div>
        </div>
        
        <div className="calendar-appointment-card">
          <div className="calendar-appointment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path>
            </svg>
          </div>
          <div className="calendar-appointment-content">
            <div className="calendar-appointment-title">Physiotherapy Appointment</div>
            <div className="calendar-appointment-time">2:00 PM - Dr. Wilson</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarView;