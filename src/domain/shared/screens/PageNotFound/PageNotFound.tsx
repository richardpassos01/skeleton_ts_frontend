import {Header} from "@design-system";
import React from "react";
import { Wrapper, Content } from "./PageNotFound.styles";

const PageNotFound: React.FunctionComponent = () => (
  <>
    <Header />
    <Wrapper>
      <Content>Page Not Found</Content>
    </Wrapper>
  </>
);

export default PageNotFound;
