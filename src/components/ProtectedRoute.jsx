// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authUser = localStorage.getItem("authUser");

  if (!authUser) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in → show page
  return children;
};

export default ProtectedRoute;