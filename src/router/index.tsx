import { useRoutes } from "react-router-dom";
import AthRoutes from "./AuthRoute";
import DashboardRouters from "./Dashboard";

export default function AppRouter() {
  return useRoutes([AthRoutes, DashboardRouters]);
}
