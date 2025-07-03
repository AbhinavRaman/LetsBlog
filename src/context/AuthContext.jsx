import React, { useContext, createContext, useState } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Dummy register and login functions (replace with real Firebase logic)
  const register = async (email, password) => {
    // Replace with your registration logic
    setUser({ email });
  };

  const login = async (email, password) => {
    // Replace with your login logic
    setUser({ email });
  };

  const value = {
    user,
    register,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 