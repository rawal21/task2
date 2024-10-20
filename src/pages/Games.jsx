
import React from 'react';
import styles from './Games.module.css'; // Import CSS module

function Games() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Title */}
          <div className="col-12">
            <h3 className={`text-start fs-3 fw-bolder ${styles.title}`}>
              <span className={styles.highlight}>GAMES</span>{" "}
              <span className={styles.preview}>PREVIEW</span>
            </h3>
          </div>

          {/* Game Images */}
          <div className="col-12 col-md-4 d-flex justify-content-center ">
            <img
              src="media/images/game2.png"
              alt="Game 2"
              className={styles['game-img']}
            />
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <img
              src="media/images/game3.png"
              alt="Game 3"
              className={styles['game-img']}
            />
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <img
              src="media/images/game4.png"
              alt="Game 4"
              className={styles['game-img']}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;

