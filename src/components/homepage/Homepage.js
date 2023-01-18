import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

import styles from './homepage.module.scss';
import jumboImage from '../../jumbo.png';


const Homepage = () => {
  return (
    <div className={styles.body}>
      <Navbar />
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
                <img
                  src="https://dummyimage.com/200x300/f97316/ffffff"
                  alt="Desktop PC"
                />
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
                <img
                  src="https://dummyimage.com/200x300/f97316/ffffff"
                  alt="Laptop Computer"
                />
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
                <img
                  src="https://dummyimage.com/200x300/f97316/ffffff"
                  alt="Computer Parts"
                />
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
