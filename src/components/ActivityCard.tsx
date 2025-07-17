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
      <div className="participants-section">
        <h3 style={{ marginTop: '1.5em', color: '#2c3e50' }}>Participants</h3>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '1.5em',
          background: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          margin: '0.5em 0 1em 0'
        }}>
          {participants.length === 0 ? (
            <li style={{ color: '#888' }}>No participants yet.</li>
          ) : (
            participants.map((name, idx) => (
              <li key={idx} style={{ padding: '0.25em 0', color: '#34495e' }}>
                {name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};