import { useRoutes } from 'react-router-dom';
import AthRoutes from './AuthRoute';
import DashboardRouters from './DashboardRoute';

export default function AppRouter() {
  return useRoutes([AthRoutes, DashboardRouters]);
}
