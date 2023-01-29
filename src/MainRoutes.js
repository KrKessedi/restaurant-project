import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import ReservePage from './pages/ReservePage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='reserve' element={<ReservePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
