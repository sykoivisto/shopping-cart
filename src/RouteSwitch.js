import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Shop from './components/shop/Shop';

const RouteSwitch = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;