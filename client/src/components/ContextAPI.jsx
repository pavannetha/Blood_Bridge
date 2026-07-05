import React, { createContext, useState } from "react";

export const contextData = createContext();

export default function ContextAPI({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <contextData.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
      }}
    >
      {children}
    </contextData.Provider>
  );
}
