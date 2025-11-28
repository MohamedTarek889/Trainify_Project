import { createContext } from "react";

interface User {
  email: string;
  name: string;
  role: "admin" | "user";
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: "admin" | "user") => void;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
