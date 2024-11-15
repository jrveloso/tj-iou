import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import IOUList from "./pages/IOUList";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";
import Admin from "./pages/Admin";
import Dashboard from "./layout/Dashboard";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route
          path="ious"
          element={
            <ProtectedRoute>
              <IOUList />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedAdminRoute>
              <Admin />
            </ProtectedAdminRoute>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="404" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
