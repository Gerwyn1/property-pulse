"use client";
import { createContext, useState, useContext } from "react";

// Create context
const GlobalContext = createContext();

// Create provider
export const GlobalProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Create custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
