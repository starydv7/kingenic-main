import React from 'react'
import { Router, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <div>
     <Router>
      <Routes to="/"element={<Home/>}/>
      <Routes to="/about"element={<AboutUs/>}/>
      <Routes to="/contact"element={<ContactUs/>}/>
     </Router>
    </div>
  )
}

export default AllRoutes;