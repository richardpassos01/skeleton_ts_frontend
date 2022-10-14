import { Box, Flex } from "reflexbox";
import { Content, HeaderIcon } from "./Header.styles";
import { Icons } from "../../index";

interface Props {
  backgroundColor?: boolean;
  children: JSX.Element,
}

const Header: React.FunctionComponent<Props> = ({ backgroundColor, children }) => {

  return (
    <>
      <Content>
        <Flex alignItems="center" justifyContent="center">
          <Box width={50}>
            <HeaderIcon src={Icons.Logo} />
          </Box>
        </Flex>
      </Content>
    </>
  );
};

export default Header;
