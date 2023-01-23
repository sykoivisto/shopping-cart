import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import ItemPreview from './item-preview/ItemPreview';

import itemData from '../../data/itemData';

import styles from './shop.module.scss';

const Shop = ({cartController, onClickCart}) => {
  const { category } = useParams();
  const [categoryText, setCategoryText] = useState('All Products');
  const [displayedItems, setDisplayedItems] = useState([
    ...itemData.desktops,
    ...itemData.laptops,
    ...itemData.videoCards,
  ]);

  useEffect(() => {
    // set the category text and displayed items
    switch (category) {
      case 'desktops':
        setCategoryText('Desktops');
        setDisplayedItems(itemData.desktops);
        break;
      case 'laptops':
        setCategoryText('Laptops');
        setDisplayedItems(itemData.laptops);
        break;
      case 'video-cards':
        setCategoryText('Video Cards');
        setDisplayedItems(itemData.videoCards);
        break;
      default:
        setCategoryText('All Products');
        setDisplayedItems([
          ...itemData.desktops,
          ...itemData.laptops,
          ...itemData.videoCards,
        ]);
        break;
    }
  }, [category]);

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.navbarWrapper}>
        <Navbar onClickCart={onClickCart} />
      </div>
      <div className={styles.main}>
        <div className={styles.breadcrumb}>
          <p>Shop /</p>
          <p className={styles.current}>{categoryText}</p>
        </div>
        <div className={styles.sort}>
          <ul>
            <li>
              <Link className={styles.categoryNav} to="/shop">
                All Products
              </Link>
            </li>
            <li>
              <Link className={styles.categoryNav} to="/shop/desktops">
                Desktops
              </Link>
            </li>
            <li>
              <Link className={styles.categoryNav} to="/shop/laptops">
                Laptops
              </Link>
            </li>
            <li>
              <Link className={styles.categoryNav} to="/shop/video-cards">
                Video Cards
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.products}>
          {displayedItems.map((item) => {
            return (
              <ItemPreview
                key={item.name}
                name={item.name}
                price={item.price}
                img={item.img}
                id={item.id}
                cartController={cartController}
                onClickCart={onClickCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Shop;
