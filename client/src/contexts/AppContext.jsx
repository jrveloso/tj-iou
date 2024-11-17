import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [ious, setIOUs] = useState([]);

  useEffect(() => {
    const fetchIOUs = async () => {
      try {
        const response = await fetch(`https://backend-small-violet-5911.fly.dev/api/ious`);
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
