import {Header} from "@design-system";
import React from "react";
import { Wrapper, Content } from "./PageError.styles";

const PageError: React.FunctionComponent = () => (
  <>
    <Header />
    <Wrapper>
      <Content>Page Error</Content>
    </Wrapper>
  </>
);

export default PageError;
