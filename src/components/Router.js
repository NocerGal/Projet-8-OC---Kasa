import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from '../pages/Home/home';
import About_Us from '../pages/about-us';
import Fiches_Logements from '../pages/fiche-logement';
import Page_Not_Found from '../pages/page-not-found';

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
            <Route path="/a-propos" element={<About_Us />} />
            <Route path="/fiches-logements" element={<Fiches_Logements />} />
            <Route path="/page-not-found" element={<Page_Not_Found />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}
