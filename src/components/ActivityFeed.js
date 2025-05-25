import React from 'react';
import { activityData } from '../data/healthData';

function ActivityFeed() {
  // Find the maximum value for scaling
  const maxValue = Math.max(...activityData.weeklyActivity.map(item => item.value));
  
  return (
    <section className="activity-feed">
      <h2>Activity</h2>
      
      <div className="activity-summary">
        <div className="activity-summary-number">{activityData.weeklyAppointments}</div>
        <div className="activity-summary-text">appointments on this week</div>
      </div>
      
      <div className="activity-chart">
        {activityData.weeklyActivity.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          const isActive = index === 3; // Thursday is active
          
          return (
            <div key={item.day} className="activity-chart-bar">
              <div 
                className={`activity-chart-column ${isActive ? 'active' : ''}`}
                style={{ height: `${height}%` }}
              ></div>
              <div className="activity-chart-label">{item.day}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ActivityFeed;