import * as React from "react";
import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import useAuthentication from "@domain/public/hooks/useAuthentication";
import { PublicRoutes } from "@domain/public/routes";
import { DashboardRoutes } from "@domain/dashboard/routes";

interface Props {
  isPublic?: boolean;
}

const RoutePermission: React.FunctionComponent<Props> = ({ isPublic }) => {
  const { getAccessToken } = useAuthentication();
  const accessToken = getAccessToken();

  if (isPublic) return accessToken ? <Navigate to={DashboardRoutes.DASHBOARD} replace /> : <Outlet />;
  
  return accessToken ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} replace />;
};

export default RoutePermission;
