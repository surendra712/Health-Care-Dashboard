import React from 'react';
import { healthStatusCards } from '../data/healthData';

// SVG icons for health status cards
const getIcon = (iconName) => {
  switch (iconName) {
    case 'lungs':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.081 20c0-2.164.813-4.245 2.262-5.788A7.587 7.587 0 0 1 14.021 12H16c2.829 0 5.539-1.12 7.532-3.113"></path>
          <path d="M2 14.652c0-2.4 1.515-4.562 3.777-5.433l.223-.09"></path>
          <path d="M4 8.5l.553-2.2c.566-2.267 1.5-3.891 4.447-3.3 3 .6 3 2.5 3 5"></path>
          <path d="M14 9.5V5c0-2.5 0-4.4 3-5 2.947-.591 3.881 1.033 4.447 3.3L22 5.5"></path>
        </svg>
      );
    case 'tooth':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5.5c-1.074-.586-2.583-.576-3.5.044-2.28 1.544-1.5 5.706-1.5 5.706s-2.218.044-3.5-1.5c-1.282-1.544-1.579-4.75.5-6.5s5.219-1.8 6.5-.5"></path>
          <path d="M10.5 10.5c-.5.5-1.207 2.5-1.207 3.5 0 1.5 1.5 2 2.5 2s2.5-.5 2.5-2c0-1-.5-2.5-1.5-3.5"></path>
          <path d="M12 5.5c1.074-.586 2.583-.576 3.5.044 2.28 1.544 1.5 5.706 1.5 5.706s2.218.044 3.5-1.5c1.282-1.544 1.579-4.75-.5-6.5s-5.219-1.8-6.5-.5"></path>
        </svg>
      );
    case 'bone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path>
        </svg>
      );
    default:
      return null;
  }
};

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map(card => (
        <div key={card.id} className="health-status-card">
          <div className={`health-status-card-icon ${card.status}`}>
            {getIcon(card.icon)}
          </div>
          <div className="health-status-card-content">
            <div className="health-status-card-title">
              {card.title}
              <span className={`status-indicator ${card.status}`}></span>
            </div>
            <div className="health-status-card-date">
              Last check: {new Date(card.date).toLocaleDateString()}
            </div>
            <div className="health-status-card-description">
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;