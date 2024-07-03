import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allproducts from './Allproducts';
import Cart from './cart';

function App() {
  const [cart, setcart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/allproducts' element={<Allproducts cart={cart} setcart={setcart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );h
}

export default App;