import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: string[];
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  participants,
}) => {
  return (
    <div className="activity-card">
      <h2 style={{ color: '#2980b9' }}>{title}</h2>
      <p style={{ color: '#34495e' }}>{description}</p>
      <div className="activity-details">
        <div style={{ marginBottom: '0.5em' }}>
          <strong>Date:</strong> {date}
        </div>
        <div style={{ marginBottom: '0.5em' }}>
          <strong>Time:</strong> {time}
        </div>
        <div style={{ marginBottom: '1em' }}>
          <strong>Location:</strong> {location}
        </div>
      </div>
      <div className="participants-section" style={{
        marginTop: '1.5em',
        padding: '1em',
        background: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '0.5em' }}>Participants</h3>
        <ul style={{ paddingLeft: '1.5em', margin: 0 }}>
          {participants.length === 0 ? (
            <li style={{ color: '#888' }}>No participants yet.</li>
          ) : (
            participants.map((name: string, idx: number) => (
              <li key={idx} style={{
                color: '#34495e',
                padding: '0.25em 0',
                fontWeight: 500,
                borderBottom: idx < participants.length - 1 ? '1px solid #eee' : 'none'
              }}>
                {name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};