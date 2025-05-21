import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(false);
  const login = (u, p) => { if (u==="admin"&&p==="admin1234") setAuth(true); };
  const logout = () => setAuth(false);
  return <AuthContext.Provider value={{isAuthenticated,login,logout}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
