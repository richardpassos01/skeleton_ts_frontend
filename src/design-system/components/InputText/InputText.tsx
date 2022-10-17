import * as React from "react";
import { Box } from "reflexbox";
import { Container, SpanError, Input } from "./InputText.styles";

interface Props {
  name?: string;
  onChange: any;
  value: string;
  invalid: any;
}

const InputText: React.FunctionComponent<Props> = (({ name, onChange, value, invalid }) => (
  <Container>
    <Input name={name} onChange={onChange} value={value} invalid={invalid} />
    {invalid && (
      <Box mt={1}>
        <SpanError>{invalid}</SpanError>
      </Box>
    )}
  </Container>
));

export default InputText;
