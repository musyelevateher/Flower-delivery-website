import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // check if user is signed in

  if (!token) {
    // If not signed in, save where they were trying to go
    localStorage.setItem("redirectAfterLogin", window.location.pathname);
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // if signed in, show child routes
};

export default ProtectedRoute;
