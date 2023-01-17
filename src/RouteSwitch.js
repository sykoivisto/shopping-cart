import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Shop from './components/shop/Shop';

const RouteSwitch = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Navigate to="/shop/all-products" />} />
        <Route path="/shop/:category" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;