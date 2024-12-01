import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const Home = () => {
  const { user } = useAuth();
  const { ious } = useAppContext();
  const [iousRemaining, setIOUsRemaining] = useState(0);

  useEffect(() => {
    if (user) {
      const iousLeft = ious.filter(
        (iou) => iou.paid === false && iou.userID === user.username
      ).length;
      setIOUsRemaining(iousLeft);
    }
  }, [ious])

  return (
    <div className="hero bg-base-100 h-screen w-screen overflow-hidden">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {user ? (
            <section>
              <h1>
                You have {iousRemaining} unpaid IOUs, {user.firstName}
              </h1>
            </section>
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
