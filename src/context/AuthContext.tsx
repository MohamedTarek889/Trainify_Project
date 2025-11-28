import React, { useState, useEffect } from "react";
import { AuthContext } from "./authContextDefinition";

interface User {
  email: string;
  name: string;
  role: "admin" | "user";
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("trainify_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string, role: "admin" | "user") => {
    void password;
    const userData: User = {
      email,
      name: email.split("@")[0],
      role,
    };

    setUser(userData);
    localStorage.setItem("trainify_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("trainify_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
