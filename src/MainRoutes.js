import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import ReservePage from './pages/ReservePage';
import ContactPage from './pages/ContactPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='reserve' element={<ReservePage />} />
        <Route path='contacts' element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
