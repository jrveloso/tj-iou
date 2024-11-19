import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 z-50 border-solid border-b-1 backdrop-blur-md border-gray-100 flex">
      <div className="drawer lg:hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn text-xl drawer-button bg-base-100 border-none"
          >
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/ious">IOUs</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Log Out</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-start">
        <NavLink className="btn btn-ghost text-xl" to="/ious">
          IOUs
        </NavLink>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ious">IOUs</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Log Out</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
