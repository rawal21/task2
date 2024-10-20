import React from 'react';

const ComingSoonButton = () => {
  return (
    <button style={styles.button}>
      <span style={styles.icon}>▶</span>
      COMING SOON
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#a896e4', // light purple background
    color: '#fff',               // white text
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    width : "12rem",
    marginLeft : "1rem",
    marginTop : "1rem",

  },
  icon: {
    marginRight: '8px',
    fontSize: '12px',
  }
};

export default ComingSoonButton;
