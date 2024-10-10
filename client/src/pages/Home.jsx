import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <h2>Welcome {user.username}</h2>
      ) : (
        <span>
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
        </span>
      )}
    </div>
  );
};

export default Home;
