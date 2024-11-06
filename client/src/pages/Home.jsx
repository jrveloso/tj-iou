import { useAuth } from "../contexts/AuthContext";


const Home = () => {
  const { user } = useAuth();

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
      {user ? (
        <h1>Welcome {user.username}</h1>
      ) : (
        <>
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Track and pay your IOUs
        </p>
        <span>
          <a href="/login" className="btn btn-primary mr-2">Log In</a>
          <a href="/signup" className="btn btn-primary">Sign Up</a>
        </span>
        </>
      )}
      </div>
    </div>
  </div>
  );
};

export default Home;
