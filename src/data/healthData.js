// Health metrics data
export const healthMetrics = [
  {
    id: 1,
    name: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    status: 'normal'
  },
  {
    id: 2,
    name: 'Heart Rate',
    value: '72',
    unit: 'bpm',
    status: 'normal'
  },
  {
    id: 3,
    name: 'Body Temperature',
    value: '37.2',
    unit: '°C',
    status: 'normal'
  },
  {
    id: 4,
    name: 'Blood Glucose',
    value: '95',
    unit: 'mg/dL',
    status: 'normal'
  }
];

// Anatomical health status data
export const anatomyStatus = [
  {
    id: 1,
    name: 'Heart',
    status: 'healthy',
    color: '#4CAF50', // green
    position: { top: '35%', left: '50%' },
    lastCheckup: '2023-09-15'
  },
  {
    id: 2,
    name: 'Lungs',
    status: 'attention',
    color: '#F44336', // red
    position: { top: '30%', left: '50%' },
    lastCheckup: '2023-09-20'
  },
  {
    id: 3,
    name: 'Teeth',
    status: 'normal',
    color: '#2196F3', // blue
    position: { top: '20%', left: '50%' },
    lastCheckup: '2023-08-10'
  },
  {
    id: 4,
    name: 'Bone',
    status: 'normal',
    color: '#2196F3', // blue
    position: { top: '60%', left: '50%' },
    lastCheckup: '2023-07-25'
  }
];

// Health status cards data
export const healthStatusCards = [
  {
    id: 1,
    title: 'Lungs',
    status: 'attention',
    color: '#F44336', // red
    date: '2023-09-20',
    description: 'Slight inflammation detected. Follow-up recommended.',
    icon: 'lungs'
  },
  {
    id: 2,
    title: 'Teeth',
    status: 'normal',
    color: '#2196F3', // blue
    date: '2023-08-10',
    description: 'Regular cleaning recommended in 3 months.',
    icon: 'tooth'
  },
  {
    id: 3,
    title: 'Bone',
    status: 'normal',
    color: '#2196F3', // blue
    date: '2023-07-25',
    description: 'Bone density normal. Next check in 12 months.',
    icon: 'bone'
  }
];

// Calendar data for October 2023
export const calendarData = {
  month: 'October',
  year: 2023,
  days: 31,
  startDay: 0, // 0 = Sunday
  appointments: [
    { day: 12, count: 2 }, // Thursday
    { day: 14, count: 2 }, // Saturday
    { day: 18, count: 1 }, // Wednesday
    { day: 20, count: 1 }  // Friday
  ]
};

// Activity data
export const activityData = {
  weeklyAppointments: 3,
  monthlyAppointments: 6,
  weeklyActivity: [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 15 },
    { day: 'Wed', value: 30 },
    { day: 'Thu', value: 45 },
    { day: 'Fri', value: 25 },
    { day: 'Sat', value: 40 },
    { day: 'Sun', value: 10 }
  ]
};

// Navigation links
export const navigationLinks = [
  { id: 1, name: 'Dashboard', icon: 'dashboard', active: true },
  { id: 2, name: 'History', icon: 'history', active: false },
  { id: 3, name: 'Calendar', icon: 'calendar', active: false },
  { id: 4, name: 'Appointments', icon: 'appointment', active: false },
  { id: 5, name: 'Statistics', icon: 'statistics', active: false },
  { id: 6, name: 'Tests', icon: 'test', active: false },
  { id: 7, name: 'Chat', icon: 'chat', active: false },
  { id: 8, name: 'Support', icon: 'support', active: false },
  { id: 9, name: 'Setting', icon: 'setting', active: false }
];

// Export default for backward compatibility
const healthData = healthMetrics;
export default healthData;