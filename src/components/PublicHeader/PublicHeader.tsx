import * as React from "react";
import {Header, HeaderItem, HyperLink} from "@design-system";
import { PublicRoutes } from "@domain/public/routes";

const PublicHeader: React.FunctionComponent = () => {
  return (
    <>
      <Header>
        <HeaderItem><HyperLink href={PublicRoutes.LOGIN}>Login</HyperLink></HeaderItem>
        <HeaderItem><HyperLink border href={PublicRoutes.SIGN_UP}>Sign up</HyperLink></HeaderItem>
      </Header>
    </>
  );
};

export default PublicHeader;
