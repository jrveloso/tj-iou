import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="hero bg-base-100 h-screen w-screen overflow-hidden">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {user ? (
            <Navigate to="/ious" />
          ) : (
            <section>
              <h1 className="text-5xl font-bold py-6">
                Track and Pay Your IOUs
              </h1>
              <span>
                <Link to="/login" className="btn btn-primary mr-2">
                  Log In
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </span>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
