

import React, { useState, useEffect } from "react";
import styles from "./GameSection.module.css"; // Import CSS module
import { Link } from "react-router-dom";

const GameSection = () => {
  // Array of images with corresponding background images and button colors
  const images = [
    {
      src: "media/images/game.png",
      btnColor: "#FF5733", // Example color for the "Discover" button
    },
    {
      src: "media/images/game1.png",
      btnColor: "#33FF57", // Example color for the "Discover" button
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonColor, setButtonColor] = useState(images[0].btnColor);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Update the button color when the image changes
    setButtonColor(images[currentImageIndex].btnColor);
  }, [currentImageIndex]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 style={{ fontFamily: "fantasy" }} className={styles.title}>
            Games
          </h1>
          <p className={styles.subtitle}>Stay tuned for upcoming updates!</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div
          className={`${styles["gallery-container"]} col-12 col-md-8`}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "auto",
            maxWidth: "50rem",
            maxHeight: "45rem",
          }}
        >
          {/* Left Arrow Button */}
          <button onClick={prevImage} className={styles["nav-btn-left"]}>
            {"<"}
          </button>

          <div className={styles["gallery-wrap"]}>
            <div className={styles.gallery}>
              <img
                src={images[currentImageIndex].src}
                alt={`Image ${currentImageIndex + 1}`}
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button onClick={nextImage} className={styles["nav-btn-right"]}>
            {">"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <Link
            to="/game"
            className={`btn btn-lg ${styles["discover-btn"]}`}
            style={{
              backgroundColor: buttonColor,
              color: "white",
            }}
          >
            Discover →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
