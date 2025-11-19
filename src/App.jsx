import React from "react";

import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

// ! Page import
import Home from "./pages/Home";
import CatagoryShop from "./pages/CatagoryShop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SingleBook from "./pages/SingleBook";

// ! Component Import

import Header from "./components/Header";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller";


const App = () => {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
      <Header />
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-4 py-8 ">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
           <Route path="/bestsell" element={<BestSeller/>} />
        <Route path="/single_book/:id" element={<SingleBook />} />
        </Routes>
      </div>
      <Footer/>
    </main>
  );
};

export default App;
