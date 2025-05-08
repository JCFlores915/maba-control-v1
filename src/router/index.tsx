import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Auth/Login';
import ResetPassword from '../pages/Auth/ResetPassword';
import RecoverPassword from '../pages/Auth/RecoverPassword';
import NotFound from '../pages/NotFound/NotFound';
import Settings from '../pages/Settings/Settings';
import AuthRoute from '../components/AuthRoute';
import LayoutApp from '../components/LayoutApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute />, // validación
    children: [
      {
        element: <LayoutApp />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'settings', element: <Settings /> },
        ]
      }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/recover-password', element: <RecoverPassword /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '*', element: <NotFound /> }
]);