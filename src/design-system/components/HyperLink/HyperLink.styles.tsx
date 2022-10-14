import { Styles } from "@design-system";
import styled from "styled-components";

export const HyperLink = styled.a`
  color: ${Styles.Theme.primary.blue};
  border: none;
  text-decoration: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
`;

export default HyperLink;
