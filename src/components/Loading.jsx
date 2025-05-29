import React from 'react';

const InlineVerifyingLoader = () => {
  const lineContainer = {
    position: 'relative',
    width: '100%',
    height: '4px',
    backgroundColor: '#ddd',
    overflow: 'hidden',
    borderRadius: '2px',
    marginTop: '8px',
  };

  const movingLine = {
    position: 'absolute',
    height: '100%',
    width: '30%',
    backgroundColor: '#4caf50',
    animation: 'slideLine 1.2s infinite',
  };

  return (
    <>
      <div style={{ fontSize: '14px', color: '#333' }}>
        Verifying...
        <div style={lineContainer}>
          <div style={movingLine}></div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideLine {
            0% { left: -30%; }
            50% { left: 50%; }
            100% { left: 100%; }
          }
        `}
      </style>
    </>
  );
};

export default InlineVerifyingLoader;