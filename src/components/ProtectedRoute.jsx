import { Navigate } from "react-router-dom";

// If there is no logged-in user, send them to the login page
function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
