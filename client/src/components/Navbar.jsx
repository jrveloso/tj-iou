import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-solid border-b-2 border-gray-200">
      <div className="drawer lg:hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-center">
          <label htmlFor="my-drawer-2" className="btn text-xl drawer-button bg-base-100 border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
      <div className="flex-1 flex justify-center lg:justify-start">
        <a className="btn btn-ghost text-xl" href="/">
          IOUs
        </a>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
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
