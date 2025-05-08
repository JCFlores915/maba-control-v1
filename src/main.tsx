import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import 'antd/dist/reset.css';
import './index.css';
import AppTheme from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppTheme />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
