import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [confirmedUsername, setConfirmedUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const { logIn } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username !== confirmedUsername) {
      alert("username must match");
      return;
    }
    if (password !== confirmedPassword) {
      alert("passwords must match");
      return;
    }

    console.log(firstName, lastName, username, password)
    try {
      const res = await fetch("http://localhost:5003/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ firstName, lastName, username, password }),
      });

      if (!res.ok) {
        throw new Error("Sign up failed");
      }

      const response = await fetch("http://localhost:5003/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // To send cookies
      });

      const data = await response.json()

      console.log("Registered", data);
      logIn(data.user)
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employee ID</span>
              </label>
              <input
                type="text"
                placeholder="Employee ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Employee ID</span>
              </label>
              <input
                type="text"
                placeholder="Employee ID"
                value={confirmedUsername}
                onChange={(e) => setConfirmedUsername(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
