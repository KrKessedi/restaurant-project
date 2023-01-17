import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Topbar from './Topbar';

const Layout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
