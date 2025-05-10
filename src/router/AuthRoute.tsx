import { Outlet } from "react-router-dom";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import NotFound from "../pages/NotFound/NotFoundPage";
import { PublicRoute } from "../guards/AuthGuards";

const AthRoutes = 
  {
    path: "/",
    element: (
      <PublicRoute>
        <Outlet />
      </PublicRoute>
    ),
    children: [
      {
        children: [
          { path: "login", element: <Login /> },
          { path: "recover-password", element: <RecoverPassword /> },
          { path: "reset-password", element: <ResetPassword /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  };


export default AthRoutes;