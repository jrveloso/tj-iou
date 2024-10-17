import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="artboard phone-5">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl" href="/">IOUs</a>
          </div>
          <div className="flex-none">
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
