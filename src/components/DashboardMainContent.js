import React from 'react';
import DashboardOverview from './DashboardOverview';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalenderView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <main className="dashboard-main-content">
      <DashboardOverview />
      <AnatomySection />
      <HealthStatusCards />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
}

export default DashboardMainContent;