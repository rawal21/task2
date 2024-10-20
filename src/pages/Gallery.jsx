
import React, { useState } from "react";
import styles from "./Gallery.module.css"; // Import styles from CSS module

const imageData = {
  all: [
    { id: 1, src: "media/images/dogimg2.png", alt: "Image 1" },
    { id: 2, src: "media/images/dogimg3.png", alt: "Image 2" },
    { id: 3, src: "media/images/dogimg4.png", alt: "Image 3" },
    { id: 4, src: "media/images/dogimg5.png", alt: "Image 4" },
    { id: 5, src: "media/images/dogimg6.png", alt: "Image 5" },
  ],
  photos: [
    { id: 1, src: "media/images/dogimg7.png", alt: "Photo 1" },
    { id: 2, src: "media/images/imgdog8.png", alt: "Photo 2" },
  ],
  videos: [
    { id: 1, src: "media/images/game1.png", alt: "Video 1" },
    { id: 2, src: "media/images/game2.png", alt: "Video 2" },
  ],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = imageData[activeTab];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
    );
  };

  // Display three images at a time
  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className={`container mt-5 ${styles["gallery-container"]}`}>
      <div className="row justify-content-center">
        {/* Tabs for filtering */}
        <div className={`tabs col-12 text-center mb-4 ${styles.tabs}`}>
          <span
            className={`tab mx-3 ${activeTab === "all" ? styles.active : ""}`}
            onClick={() => setActiveTab("all")}
          >
            ALL
          </span>
          <span
            className={`tab mx-3 ${
              activeTab === "photos" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("photos")}
          >
            PHOTOS
          </span>
          <span
            className={`tab mx-3 ${
              activeTab === "videos" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            VIDEOS
          </span>
        </div>

        {/* Image Carousel */}
        <div
          className={`carousel col-12 d-flex justify-content-center align-items-center ${styles.carousel}`}
        >
          <button
            className={`prev-btn mx-2 ${styles["prev-btn"]}`}
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <div
            className={`carousel-images d-flex justify-content-center ${styles["carousel-images"]}`}
          >
            {displayedImages.map((image) => (
              <img
                key={image.id}
                className={`carousel-image mx-2 ${styles["carousel-image"]}`}
                style={{ width: "15rem", height: "15rem" }}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
          <button
            className={`next-btn mx-2 ${styles["next-btn"]}`}
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
