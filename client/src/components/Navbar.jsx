import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-solid border-b-2 border-gray-200 flex">
      <div className="flex-1 self-start lg:justify-start">
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
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/logout">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
