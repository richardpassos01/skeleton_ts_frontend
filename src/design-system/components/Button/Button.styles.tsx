import { Styles } from "@design-system";
import styled from "styled-components";

interface Props {
  color?: string;
}

export const Button = styled.button<Props>`
  background-color: ${Styles.Theme.primary.green};
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  color: ${Styles.Theme.primary.white};
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  border: none;

  ${(props) => props.color &&
    `
      background-color: ${props.color}
    `}
`;

export default Button;
