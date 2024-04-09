import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";

export const IndexPage = lazy(() => import("../pages/dashboard-page"));
export const ProfilePage = lazy(() => import("../pages/profile-page"));
export const MailPage = lazy(() => import("../pages/mail-page"));
export const StatisticPage = lazy(() => import("../pages/statistic-page"));
export const MessagePage = lazy(() => import("../pages/message-page"));
export const Page404 = lazy(() => import("../pages/page404"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: "profile", element: <ProfilePage /> },
        { path: "statistic", element: <StatisticPage /> },
        { path: "mail", element: <MailPage /> },
        { path: "message", element: <MessagePage /> },
      ],
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="404" replace />,
    },
  ]);
  return routes;
}
