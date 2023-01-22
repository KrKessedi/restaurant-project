import React from 'react';
import '../styles/HomePage.css';
// import dish from '../images/dish.png'
// import { motion } from 'framer-motion'
import PopularDishes from '../components/PopularDishes';
import DishCategories from '../components/DishCategories';
import AboutUs from '../components/AboutUs';
import WelcomePage from '../components/WelcomePage';

const HomePage = () => {
  return (
    <div>
      <WelcomePage />
      <PopularDishes />
      <DishCategories />
      <AboutUs />
      {/* Здесь будет компонент о статистике */}
      {/* Здесь будет компонент о партнерах */}
    </div>
  );
};

export default HomePage;
