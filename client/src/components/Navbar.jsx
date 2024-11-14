import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAdmin } = useAuth();

  return (
    <div className="navbar bg-base-100 border-solid border-b-2 border-gray-200 flex">
      <div className="flex-1 flex justify-center md:justify-start">
        <a className="btn btn-ghost text-xl" href="/ious">
          IOUs
        </a>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/ious">IOUs</a>
          </li>
          {isAdmin ? (
            <li>
              <a href="/admin">Admin</a>
            </li>
          ) : ""}
          <li>
            <a href="/logout">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
