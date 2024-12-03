import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboard,
  faLock,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar fixed bg-base-100 z-50 border-solid border-b-2 backdrop-blur-md flex h-16">
      {user ? (
        <div className="drawer lg:hidden">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-start justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn text-xl drawer-button bg-base-100 border-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 py-4">
              <li className="mb-5">
                <span className="text-2xl">
                  {user.firstName} {user.lastName}
                </span>
              </li>
              <li className="mb-5">
                <NavLink className="text-3xl text-primary" to="/ious">
                  <FontAwesomeIcon icon={faClipboard} className="pr-2" />
                  IOUs
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink className="text-3xl text-primary" to="/admin">
                  <FontAwesomeIcon icon={faLock} className="pr-2" />
                  Admin
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink className="text-3xl text-primary" to="/logout">
                  <FontAwesomeIcon icon={faRightFromBracket} className="pr-2" />
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <div className="flex-1 flex justify-center md:justify-start">
        <NavLink className="btn btn-ghost text-xl" to="/ious">
          IOUs
        </NavLink>
      </div>
      {user ? (
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
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
      ) : null}
    </div>
  );
};

export default Navbar;
