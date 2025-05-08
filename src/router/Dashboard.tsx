import Dashboard from "../pages/Dashboard/Dashboard";

import Settings from "../pages/Settings/Settings";
import LayoutApp from "../components/LayoutApp";
import { ProtectedRoute } from "../guards/AuthGuards";

const DashboardRouters = {
  path: "/",
  element: (
    <ProtectedRoute>
      <LayoutApp />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <Dashboard /> },
    { path: "settings", element: <Settings /> },
  ],
};

export default DashboardRouters;
