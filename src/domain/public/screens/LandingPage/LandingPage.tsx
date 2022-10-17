import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import PublicHeader from '@components/PublicHeader/PublicHeader';

const LandingPage: React.FunctionComponent = () => {
  return (
    <>
        <PublicHeader/>
        <Flex justifyContent="center">
          <div>Landing Page</div>
        </Flex>
    </>
  );
};

export default LandingPage;
