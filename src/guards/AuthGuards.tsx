import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface GuardProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: GuardProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }: GuardProps) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};
