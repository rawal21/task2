
// Card.js
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles['card-container']}>
        <div className={styles.card}>
          <h4>Community Building<br />And<br />Initial Launch</h4>
          <img src="/media/images/dogimg3.png" alt="" />
        </div>
        <div className={`${styles.card} ${styles['card-2']}`}>
          <h4>Community Building<br />And<br />Initial Launch</h4>
          <img src="/media/images/dogimg4.png" alt="" />
        </div>
        <div className={`${styles.card} ${styles['card-3']}`}>
          <h4>Community Building<br />And<br />Initial Launch</h4>
          <img src="/media/images/dogimg7.png" alt="" />
        </div>
        <div className={`${styles.card} ${styles['card-4']}`}>
          <h4>Community Building<br />And<br />Initial Launch</h4>
          <img src="/media/images/dogimg2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
