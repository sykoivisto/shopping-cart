import './homepage.scss';
import jumboImage from '../../jumbo.png';

import { Stack } from '@mui/material';

const Homepage = () => {
  return (
    <div className='main'>
      <div className="jumbo">
        <div className="text">
          <p className="tagline">
            <span className="colorblock white">RUGGED</span>
            <span>POWER</span>
            <span className="colorblock orange">ELEGANT</span>
            <span>DESIGN</span>
          </p>
          <p className="sub">Find your custom pc now!</p>
        </div>
        <div className="image">
          <img src={jumboImage} alt="Custom PC"/>
        </div>
      </div>

      <div className="shop">
        <h1>Shop by Category</h1>
        <div className='categories'>
          <div className='card'>
            <img src="https://dummyimage.com/200x300/f97316/ffffff" alt="Desktop PC" />
            <div className="card-text">
              <div className="left">
                <p>Desktop Computers</p>
                <p className='buynow'>Buy Now!</p>
              </div>
              <div className="right">
                <span>&rarr;</span>
              </div>
            </div>
          </div>
          <div className='card'>
            <img src="https://dummyimage.com/200x300/f97316/ffffff" alt="Laptop Computer" />
            <div className="card-text">
              <div className="left">
                <p>Laptop Computers</p>
                <p className='buynow'>Buy Now!</p>
              </div>
              <div className="right">
                <span>&rarr;</span>
              </div>
            </div>
          </div>
          <div className='card'>
            <img src="https://dummyimage.com/200x300/f97316/ffffff" alt="Computer Parts" />
            <div className="card-text">
              <div className="left">
                <p>Computer Parts</p>
                <p className='buynow'>Buy Now!</p>
              </div>
              <div className="right">
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
