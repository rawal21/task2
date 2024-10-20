

import styles from './ProjectVision.module.css'; // Use CSS Modules

function ProjectVision() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className={`text-center ${styles.title}`}>
          PROJECT VISION
        </h1>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-4">
          <img
            src="/media/images/dogimg5.png"
            alt="Project Vision"
            className={`img-fluid ${styles.image}`} // Responsive image
          />
        </div>
        <div className="col-12">
          <p className={`fs-5 fw-bold text-black text-center ${styles.description}`}>
            Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectVision;
