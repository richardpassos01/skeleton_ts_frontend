import { Box } from 'reflexbox';
import styled from 'styled-components';

const  Card = styled(Box)`
  background-color: ${props => props.theme.colors.lightGrey};
  margin: auto;
  border-radius: 10px;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.secondary.grey};
`;

export default Card;
