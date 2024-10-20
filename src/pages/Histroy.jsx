
import styles from "./History.module.css";

function History() {
  return (
    <>
      <hr className={`${styles.scroll}`} />
      <div className="container mb-5 mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src="/media/images/dogimg1.png"
              alt="Alabay Dog"
              style={{ width: "100%", maxWidth: "25rem", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <h1
              style={{
                color: "#e76b05",
                fontFamily: "Montserrat",
                fontSize: "3rem",
              }}
              className="fw-bold"
            >
              History of
            </h1>
            <h1
              className="ps-md-5"
              style={{
                fontSize: "7rem",
                color: "white",
                fontFamily: "fantasy",
              }}
            >
              ALABAY
            </h1>
            <p
              className="fs-5 fw-bold"
              style={{ color: "black" }}
            >
              The Central Asian Shepherd Dog, also known as Alabay, has been a
              guardian of livestock and property for centuries. Originating
              from Central Asia, these dogs are renowned for their courage,
              strength, and loyalty.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
