import React from 'react';
import { anatomyStatus } from '../data/healthData';

function AnatomySection() {
  return (
    <section className="anatomy-section">
      <h2>Body Status</h2>
      
      <div className="anatomy-image-container">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3048/3048204.png" 
          alt="Human Body Anatomy" 
          className="anatomy-image"
        />
        
        {anatomyStatus.map(item => (
          <div 
            key={item.id}
            className={`anatomy-indicator ${item.status}`}
            style={{
              top: item.position.top,
              left: item.position.left,
              backgroundColor: item.color
            }}
          >
            <span>+</span>
            <div className="anatomy-indicator-tooltip">
              <strong>{item.name}</strong>
              <p>Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}</p>
              <p>Last checkup: {new Date(item.lastCheckup).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnatomySection;