import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface GuardProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<GuardProps> = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Use your auth context or logic here

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export const PublicRoute: React.FC<GuardProps> = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Use your auth context or logic here

    return !isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};