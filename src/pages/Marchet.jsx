

import React, { useState } from "react";
import styles from "./Marchet.module.css"; // Import CSS module

const Marchet = () => {
  // Array of images with corresponding background images
  const images = [
    {
      src: "media/images/marchet1.png",
      bgImage: "url('media/images/marchet6.png')",
    },
    {
      src: "media/images/marchet5.png",
      bgImage: "url('media/images/marchet2.png')",
    },
    {
      src: "media/images/marchet1.png",
      bgImage: "url('media/images/marchet6.png')",
    },
    {
      src: "media/images/marchet4.png",
      bgImage: "url('media/images/marchet3.png')",
    },
    {
      src: "media/images/marchet8.png",
      bgImage: "url('media/images/marchet7.png')",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className={styles.title} style={{ fontFamily: "fantasy" }}>
            MERCHANDISE
          </h1>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div
          className={`col-12 col-md-10 ${styles["gallery-container"]}`}
          style={{
            backgroundImage: images[currentImageIndex].bgImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevImage}
            className={`${styles["nav-btn"]} ${styles["left-arrow"]}`}
          >
            {"<"}
          </button>

          <div className={styles["gallery-wrap"]}>
            <div className={styles.gallery}>
              <img
                src={images[currentImageIndex].src}
                alt={`Image ${currentImageIndex + 1}`}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextImage}
            className={`${styles["nav-btn"]} ${styles["right-arrow"]}`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marchet;
