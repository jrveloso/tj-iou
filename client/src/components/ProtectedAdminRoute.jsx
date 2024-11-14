import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedAdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  console.log(isAdmin, loading)

  if (loading)
    return (
      <span className="loading loading-spinner loading-lg h-screen flex justify-self-center content-center"></span>
    );
    
  return isAdmin ? children : <Navigate to="/" />;
};

export default ProtectedAdminRoute;
