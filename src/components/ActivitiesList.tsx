import React from 'react';
import { ActivityCard } from './ActivityCard';

const activities = [
  {
    title: 'Morning Yoga',
    description: 'Start your day with a relaxing yoga session.',
    date: '2025-07-18',
    time: '07:00 AM',
    location: 'Community Center',
    participants: ['Alice', 'Bob'],
  },
  {
    title: 'Tech Talk',
    description: 'Learn about the latest in AI and machine learning.',
    date: '2025-07-19',
    time: '02:00 PM',
    location: 'Auditorium',
    participants: ['Carol', 'Dave', 'Eve'],
  },
  {
    title: 'Art Workshop',
    description: 'Explore your creativity with painting and sculpture.',
    date: '2025-07-20',
    time: '10:00 AM',
    location: 'Art Room',
    participants: [],
  },
];

export const ActivitiesList: React.FC = () => (
  <div>
    {activities.map((activity, idx) => (
      <ActivityCard key={idx} {...activity} />
    ))}
  </div>
);