import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LandingPage – minimal hero section inspired by the Figma "Cover" frame.
 * Styling kept inline for now; can be extracted later.
 */
function LandingPage() {
  const gradientStyle = {
    background: 'linear-gradient(135deg, #FFA450 0%, #FF5C00 60%)',
    minHeight: '100vh',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
    textAlign: 'center',
  };

  return (
    <section style={gradientStyle}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>
        HABITA Habit Tracker
      </h1>
      <p style={{ maxWidth: 600, fontSize: '1.25rem', marginBottom: '2rem' }}>
        Build better habits and track your progress effortlessly.
      </p>
      <Link to="/auth" style={{ textDecoration: 'none' }}>
        <button
          style={{
            backgroundColor: '#ffffff',
            color: '#FF5C00',
            border: 'none',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          Get Started
        </button>
      </Link>

      {/* Mockup images placeholder */}
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            style={{
              width: 180,
              height: 360,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 22,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default LandingPage; 