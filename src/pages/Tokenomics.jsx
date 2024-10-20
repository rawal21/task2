
import styles from './Tokenomics.module.css'; // Use CSS Modules

function Tokenomics() {
  return (
    <div className="container mt-5">
      <div className="row ps-5">
        <h1 className={` ${styles.head} text-start `} style={{  fontFamily: "fantasy", color: "#f89d03" }}>
          TOKENOMICS
        </h1>
        <div className="col-12 col-md-6">
          <div className={`row mt-5 justify-content-center`}>
            <div className={`col-12 col-sm-6 ${styles.ROW}`}>
              <h3 className="text-white">LIQUIDITY</h3>
              <h1 style={{ color: "#ffff8d" }}>LOCKED</h1>
            </div>
            <div className={`col-12 col-sm-6 ${styles.ROW}`}>
              <h3 className="text-white">CONTRACT</h3>
              <h1 style={{ color: "#ffff8d" }}>RENOUNCED</h1>
            </div>
            <div className={`col-12 col-sm-6 ${styles.ROW}`}>
              <h3 className="text-white">TAXES</h3>
              <h1 style={{ color: "#ffff8d" }}>0%</h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-5 text-center">
          <img
            src="/media/images/imgdog8.png"
            alt="Tokenomics Image"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }} // Responsive image
          />
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;

