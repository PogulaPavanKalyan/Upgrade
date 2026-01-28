import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;

export const useAuth = () => useContext(AuthContext);
