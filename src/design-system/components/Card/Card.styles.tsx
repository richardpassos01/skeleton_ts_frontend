import { Box } from 'reflexbox';
import styled from 'styled-components';

const  Card = styled(Box)`
  background-color: ${props => props.theme.white};
  margin: auto;
  border-radius: 10px;
  padding: 0;
  box-shadow:
  ${props => `0 4px 8px 0 ${props.theme.grey}, 0 6px 20px 0 ${props.theme.grey}`};
`;

export default Card;
