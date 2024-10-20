import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div style={styles.container}>
      <button style={styles.comingSoonButton}>
        <span style={styles.icon}>▶</span>
        COMING SOON
      </button>
      <Link to="/" style={styles.exitButton}>EXIT</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px', // Space between the buttons
  },
  comingSoonButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E5E5E5', 
    color: '#000',              
    border: 'none',
    borderRadius: '30px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
  },
  exitButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #E5E5E5', // Light grey border for the "EXIT" button
    borderRadius: '30px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '8px',  // Space between the icon and the text
    fontSize: '12px',
  }
};

export default ButtonGroup;
