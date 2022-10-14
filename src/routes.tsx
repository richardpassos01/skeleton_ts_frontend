import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import RoutePermission from "@components/RoutePermission";
import PageNotFound from "@domain/shared/screens/PageNotFound";

import publicRoutes from "@domain/public/routes";
import dashboardRoutes from "@domain/dashboard/routes";

import PageError from "@domain/shared/screens/PageError";
import LandingPage from "@domain/public/screens/LandingPage";

const protectedRoutes = [...dashboardRoutes];

interface RoutesProps {
  path: string;
  Component: React.FunctionComponent
}

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route errorElement={<PageError />}>
        <Route element={<RoutePermission isPublic />}>
          <Route index element={<LandingPage />} />
          {publicRoutes.map(({ Component, path}: RoutesProps, index) => (
            <Route
              key={index}
              path={path}
              element={<Component />}
            />
          ))}
        </Route>

        <Route element={<RoutePermission />}>
          {protectedRoutes.map(({ Component, path}: RoutesProps, index) => (
            <Route
              key={index}
              path={path}
              element={<Component />}
            />
          ))}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
  )
);