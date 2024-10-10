import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import IOUList from "./pages/IOUList.jsx";
import "./index.css";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LogOut from "./pages/LogOut.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
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
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="logout" element={<LogOut />} />
        </Route>
      </Routes>
    </AuthProvider>
  </Router>
);
