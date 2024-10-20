import styles from "./SocialMedia.module.css"; // Use CSS Modules

function SocialMedia() {
  return (
    <>
      <div className={`${styles["social-media-container"]} container mt-5`}>
        <div className="row">
          <h1
            className="text-start"
            style={{
              fontSize: "8rem",
              fontFamily: "fantasy",
              color: "#f89d03",
            }}
          >
            Social Media <br /> Link
          </h1>
          <div className="col-12 col-md-6">
            <div className={`${styles["link-box"]} mt-5`}>
              <ul>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/media/images/social1.png"
                      alt="Twitter"
                      className={styles.icon}
                    />
                    TWITTER LINK
                  </a>
                </li>
                <li>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/media/images/social2.png"
                      alt="Telegram"
                      className={styles.icon}
                    />
                    TELEGRAM LINK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="mb-5 img-fluid"
              src="media/images/social3.png"
              alt="Social"
              style={{ maxWidth: "100%", height: "auto" }} // Responsive image
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
