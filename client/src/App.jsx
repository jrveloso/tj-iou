import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="artboard phone-5">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
