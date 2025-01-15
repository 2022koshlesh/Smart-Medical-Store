// src/components/Burger.js
import React from 'react';

function Burger({ isOpen, toggleSidebar }) {
  return (
    <div
      className="burger-icon"
      onClick={toggleSidebar}
      style={{
        fontSize: '30px',
        cursor: 'pointer',
        color: isOpen ? 'white' : 'black', // Change color based on `isOpen`
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000
      }}
    >
      {isOpen ? '✕' : '☰'} {/* Show 'X' when open, '≡' when closed */}
    </div>
  );
}

export default Burger;
