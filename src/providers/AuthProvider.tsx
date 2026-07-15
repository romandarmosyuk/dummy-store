import type { User } from "@interfaces/User";
import { createContext, useState, type ReactNode } from "react";

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (!user) return null;

  return JSON.parse(user) as User;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getUserFromLocalStorage);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", JSON.stringify(userData.accessToken));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuth: user !== null, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
