import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import {Header,Card,Title} from "@design-system";
import PublicHeader from '@components/PublicHeader/PublicHeader';

const LandingPage: React.FunctionComponent = () => {
  return (
    <>
        <Header><PublicHeader/></Header>
        <Flex justifyContent="center">
          <Card width={450}>
            <Flex mt={20} mb={20} alignItems="center" justifyContent="center">
              <Title title="LandingPage" />
            </Flex>
          </Card>
        </Flex>
    </>
  );
};

export default LandingPage;
