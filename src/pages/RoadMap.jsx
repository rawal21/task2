
// export default RoadMap;
import styles from './RoadMap.module.css'; // Use CSS Modules

function RoadMap() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className={`${styles.title} text-start`}>Road Map</h1>
        <div className="col-12 col-md-6">
          <p className={`text-white fs-4 fw-bold mt-5`}>
            Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
          </p>
          <p className={`fs-5 fw-bold`} style={{ color: "orange" }}>
            Join us as we grow and achieve new <br />
            heights.
          </p>
        </div>
        <div className="col-12 col-md-6 mb-5 text-center">
          <img
            src="/media/images/dogimg6.png"
            alt="Roadmap Image"
            className={`img-fluid ${styles.image}`}
          />
        </div>
      </div>
    </div>
  );
}

export default RoadMap;

