import DashboardPage from "../pages/Dashboard/DashboardPage";

import LayoutApp from "../components/LayoutApp";
import { ProtectedRoute } from "../guards/AuthGuards";
import SettingsPage from "../pages/Settings/SettingsPage";
import ClientFilesCreatePage from "../pages/PeopleFiles/ClientFiles/ClientFilesCreatePage";
import ClientFilesListPage from "../pages/PeopleFiles/ClientFiles/ClientFilesListPage";
import EmployeeFilesCreatePage from "../pages/PeopleFiles/EmployeeFiles/EmployeeFilesCreatePage";
import EmployeeFilesListPage from "../pages/PeopleFiles/EmployeeFiles/EmployeeFilesListPage";

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
    { path: "files/client", element: <ClientFilesListPage /> },
    { path: "files/client/create", element: <ClientFilesCreatePage /> },
    { path: "files/employee", element: <EmployeeFilesListPage /> },
    { path: "files/employee/create", element: <EmployeeFilesCreatePage /> },
  ],
};

export default DashboardRouters;
