import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PasswordRecovery from './pages/PasswordRecovery';
import Layout from './components/Layout';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='recovery' element={<PasswordRecovery />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
