import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import {Button} from "@design-system";

const PublicHeader: React.FunctionComponent = () => {
  return (
    <>
        <Flex justifyContent="center">
            <Button>Sign in</Button>
            <Button>Sign up</Button>
        </Flex>
    </>
  );
};

export default PublicHeader;
