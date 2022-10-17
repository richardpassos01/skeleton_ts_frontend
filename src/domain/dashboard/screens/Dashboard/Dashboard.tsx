import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import { Header, Title } from "@design-system";

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Flex justifyContent="center">
        <Flex mt={20} alignItems="center" justifyContent="center">
          <Title>Dashboard</Title>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
