import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: string;
}

export const Input = styled.input<Props>`
      margin-top: 0.5em;
      background: rgb(255, 255, 255);
      border-radius: 8px;
      outline: none;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: rgb(61, 61, 77);
      padding: 5px;
      width: 100%;
      height: 47px;
      border: .1px solid ${props => props.invalid ? props.theme.red : props.theme.grey};
  
    ::placeholder {
      color: ${props => props.theme.darkGrey};
    }
  `;

export const SpanError = styled.span`
  font-size: 14px;
  color: ${props => props.theme.red};
`;

export const Container = styled.div`
  position: relative;
`;
