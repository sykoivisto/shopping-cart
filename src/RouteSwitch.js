import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Shop from './components/shop/Shop';

const RouteSwitch = ({cartController, onClickCart}) => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage onClickCart={onClickCart} />} />
        <Route path="/shop" element={<Navigate to="/shop/all-products" />} />
        <Route path="/shop/:category" element={<Shop cartController={cartController} onClickCart={onClickCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;