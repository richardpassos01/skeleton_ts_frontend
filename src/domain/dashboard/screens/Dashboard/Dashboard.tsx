import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import {Header,Card,Title} from "@design-system";

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
        <Header />
        <Flex justifyContent="center">
          <Card width={450}>
            <Flex mt={20} mb={20} alignItems="center" justifyContent="center">
              <Title title="Dashboard" />
            </Flex>
            <Flex alignItems="center" justifyContent="center" mb={20} mt={30}>
              <div>Authenticated</div>
            </Flex>
          </Card>
        </Flex>
    </>
  );
};

export default Dashboard;
