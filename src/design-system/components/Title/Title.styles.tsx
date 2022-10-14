import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Span = styled.span<Props>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 32px;
  color: ${props => props.color ?? props.theme.black};
  margin-left: .3em;
  font-size: 27px;
`;
