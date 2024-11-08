import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [ious, setIOUs] = useState([]);

  useEffect(() => {
    const fetchIOUs = async () => {
      try {
        const response = await fetch("http://localhost:5003/api/ious");
        const data = await response.json();

        setIOUs(data);
      } catch (error) {
        console.log("Error fetching", error.message);
      }
    };
    fetchIOUs();
  }, []);

  return <AppContext.Provider value={{ ious }}>{children}</AppContext.Provider>;
};
