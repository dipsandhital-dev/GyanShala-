// src/App.jsx
import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SingleBook from "./pages/SingleBook";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

// Dashboard Pages
import Dashboard from "./dashboard/Dashboard";
import EditBooks from './dashboard/EditBooks';
import ManageBooks from './dashboard/ManageBooks';
import UploadBooks from './dashboard/UploadBook';

// Layouts
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />

      <Routes>
        {/* 👇 PUBLIC ROUTES — wrapped in PublicLayout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single_book/:id" element={<SingleBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* 👇 DASHBOARD ROUTES — wrapped in DashboardLayout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} /> {/* → /dashboard */}
          <Route path="manage_books" element={<ManageBooks />} /> {/* → /dashboard/manage_books */}
          <Route path="edit_book/:id" element={<EditBooks />} /> {/* → /dashboard/edit_book/:id */}
          <Route path="upload_books" element={<UploadBooks />} /> {/* → /dashboard/upload_books */}
        </Route>
      </Routes>
    </>
  );
};

export default App;