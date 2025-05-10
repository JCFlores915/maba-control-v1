import DashboardPage from "../pages/Dashboard/DashboardPage";

import SettingsPage from "../pages/Settings/SettingsPage";
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
    { index: true, element: <DashboardPage /> },
    { path: "settings", element: <SettingsPage /> },
  ],
};

export default DashboardRouters;
