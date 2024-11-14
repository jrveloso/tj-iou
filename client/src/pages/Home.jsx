import { useAppContext } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const { ious } = useAppContext();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {user ? (
            <section>
              <h1>Welcome {user.firstName}</h1>
              <p>
                You have unpaid{" "}
                {
                  ious.filter(
                    (iou) => iou.paid === false && iou.userID === user.username
                  ).length
                }{" "}
                IOUs
              </p>
            </section>
          ) : (
            <section>
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Track and pay your IOUs</p>
              <span>
                <a href="/login" className="btn btn-primary mr-2">
                  Log In
                </a>
                <a href="/signup" className="btn btn-primary">
                  Sign Up
                </a>
              </span>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
