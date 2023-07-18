import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from '../pages/Home/home';
import AboutUs from '../pages/AboutUs';
import HousingPresentation from '../pages/HousingPresentation';
import PageNotFound from '../pages/PageNotFound';

export default function Routers() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<AboutUs />} />
            <Route
              path="/fiches-logements/:id"
              element={<HousingPresentation />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}
