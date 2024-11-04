import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="h-screen w-screen">
      <header>
        <Navbar />
      </header>
      <main className='px-2'>
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
}

export default App;
