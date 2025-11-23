// src/components/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const PublicLayout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Outlet /> {/* 👈 This renders /home, /login, /shop etc. */}
      </div>
      <Footer />
    </main>
  );
};

export default PublicLayout;