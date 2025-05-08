import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginApi } from "../api/auth";
import type { User } from "../types/auth";
import { getToken, isTokenValid, removeToken, setToken } from "../utils/toke";
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tokenStorage, setTokenStorage] = useState<string | null>(null);
  useEffect(() => {
    const token = getToken();
    if (isTokenValid(token)) {
      setTokenStorage(token);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const user = await loginApi(email, password);
    setUser(user);
    setToken("fake-token"); // Solo simulación]
    setTokenStorage("fake-token"); // Solo simulación
  };

  const logout = () => {
    setUser(null);
    removeToken();
  };

  const isAuthenticated = !!tokenStorage;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};
