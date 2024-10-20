import React from 'react';

const GamePreviews = () => {
  // Sample data for game previews
  const gamePreviews = [
    { id: 1, image: '/media/images/GameG1.png', label: 'Check out this new game!' },
    { id: 2, image: '/media/images/GameG2.png', label: 'Another epic adventure!' },
    { id: 3, image: '/media/images/GameG3.png', label: 'Don\'t miss out, new game!' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        <span style={styles.highlight}>GAME</span> PREVIEWS
      </h2>
      <div style={styles.previewContainer}>
        {gamePreviews.map((game) => (
          <div key={game.id} style={styles.card}>
            <img src={game.image} alt={game.label} style={styles.image} />
            <div style={styles.label}>{game.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'start',
    

  },
  title: {
    fontSize: '24px',
    color: '#fff',
    marginBottom: '20px',
  },
  highlight: {
    color: '#a896e4', 
  },
  previewContainer: {
    display: 'flex',
    // justifyContent: 'center',
    alignItem : "flex-start",
    gap: '20px',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    padding: '10px',
    width: '150px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  label: {
    marginTop: '10px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

export default GamePreviews;
