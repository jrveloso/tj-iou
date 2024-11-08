import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
}

export default App;
