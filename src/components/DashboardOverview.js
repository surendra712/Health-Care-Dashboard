import React from 'react';
import { healthMetrics } from '../data/healthData';

function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <h2>Health Overview</h2>
      
      <div className="health-metrics-grid">
        {healthMetrics.map(metric => (
          <div key={metric.id} className="health-metric-card">
            <div className="health-metric-name">{metric.name}</div>
            <div className="health-metric-value">
              {metric.value} <span className="health-metric-unit">{metric.unit}</span>
            </div>
            <div className={`health-metric-status ${metric.status}`}>
              {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardOverview;