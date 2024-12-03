import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faLock } from '@fortawesome/free-solid-svg-icons'

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="btm-nav lg:hidden">
      <NavLink to="/ious" className={currentPath === "/ious" ? "active" : ""}>
        <FontAwesomeIcon icon={faClipboard} />
      </NavLink>
      <NavLink to="/admin" className={currentPath === "/admin" ? "active" : ""}>
        <FontAwesomeIcon icon={faLock} />
      </NavLink>
    </div>
  );
};

export default BottomNav;
