
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Categories from './pages/showproduct';
import Products from './pages/productlist';
import AboutUs from './pages/Aboutus';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart';
import Navbar from './components/navbar';
import Announcement from './components/announcement';
// import { Categoriesarray } from './data';
// import ShowProduct from './pages/showproduct';


const App = () => {
  return (
   
    <Router> <p>hello</p>
      <Announcement/>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </Router>
  );
}

export default App;
