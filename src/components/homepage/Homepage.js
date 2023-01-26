import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

import styles from './homepage.module.scss';
import jumboImage from '../../jumbo.png';


const Homepage = ({onClickCart}) => {

  const onHoverHandler = (e, className) => {

    if (className) {
      e.target.className = styles.imageHover;
    } else {
      e.target.className = '';
    }
  }

  return (
    <div className={styles.body}>
      <Navbar onClickCart={onClickCart} />
      <div className={styles.main}>
        <div className={styles.jumbo}>
          <div className={styles.text}>
            <p className={styles.tagline}>
              <span className={`${styles.colorblock} ${styles.white}`}>RUGGED</span>
              <span>POWER</span>
              <span className={`${styles.colorblock} ${styles.orange}`}>ELEGANT</span>
              <span>DESIGN</span>
            </p>
            <p className={styles.sub}>Find your custom pc now!</p>
          </div>
          <div className={styles.image}>
            <img src={jumboImage} alt="Custom PC" />
          </div>
        </div>

        <div className={styles.shop}>
          <h1>Shop by Category</h1>
          <div className={styles.categories}>
            <Link to='/shop/desktops'>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/desktop.jpg`}
                    alt="Gamer playing on a desktop PC"
                    onMouseEnter={(e) => onHoverHandler(e, true)}
                    onMouseLeave={(e) => onHoverHandler(e, false)}
                  />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.left}>
                    <p className={styles.cardTitle}>Desktop Computers</p>
                    <p className={styles.buynow}>Buy Now!</p>
                  </div>
                  <div className={styles.right}>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='/shop/laptops'>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/laptop.jpg`}
                    alt="Gamer playing on a laptop computer"
                    onMouseEnter={(e) => onHoverHandler(e, true)}
                    onMouseLeave={(e) => onHoverHandler(e, false)}
                  />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.left}>
                    <p className={styles.cardTitle}>Laptop Computers</p>
                    <p className={styles.buynow}>Buy Now!</p>
                  </div>
                  <div className={styles.right}>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='/shop/video-cards'>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/video-card.jpg`}
                    onMouseEnter={(e) => onHoverHandler(e, true)}
                    onMouseLeave={(e) => onHoverHandler(e, false)}
                    alt="Woman holding a video card"
                  />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.left}>
                    <p className={styles.cardTitle}>Video Cards</p>
                    <p className={styles.buynow}>Buy Now!</p>
                  </div>
                  <div className={styles.right}>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
