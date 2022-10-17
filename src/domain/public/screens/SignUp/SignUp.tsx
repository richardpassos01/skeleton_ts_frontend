import * as React from "react";
import { Flex, Box } from "reflexbox/styled-components";
import { InputText, Card, Title, Button, HyperLink, Colors, InputLabel } from "@design-system";
import { PublicRoutes } from "@domain/public/routes";
import { useFormik } from "formik";
import { FormErrorMessages } from "@domain/shared/enums/FormErrorMessages";
import * as yup from "yup";
import useAuthentication from "@domain/public/hooks/useAuthentication";
import { User } from "@domain/public/interfaces/User";
import { useNavigate } from "react-router-dom";
import PublicHeader from '@components/PublicHeader/PublicHeader';

const validationSchema = yup.object().shape({
  name: yup.string().required(FormErrorMessages.REQUIRED_FIELD),
  email: yup
    .string()
    .email(FormErrorMessages.EMAIL_FIELD)
    .required(FormErrorMessages.REQUIRED_FIELD),
  password: yup.string().required(FormErrorMessages.REQUIRED_FIELD),
});

const SignUp: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { signUp } = useAuthentication();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (data: User) => {
      try {
        setIsLoading(true);
        await signUp(data);
        alert("account created");
        return navigate(PublicRoutes.LOGIN);
      } catch (error) {
        alert("unexpected error");
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <PublicHeader />
      <Flex alignItems="center" flexDirection="column">
        <Flex mt={20} mb={20} alignItems="center" justifyContent="center">
            <Title>Create account</Title>
        </Flex>
        <Card width={345}>
          <Flex alignItems="center" justifyContent="center" mb={20} mt={30}>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <InputLabel>Name</InputLabel>
                <InputText
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  invalid={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box mt={20}>
                <InputLabel>Email</InputLabel>
                <InputText
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  invalid={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box mt={20}>
                <InputLabel>Password</InputLabel>
                <InputText
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  invalid={formik.touched.password && formik.errors.password}
                />
              </Box>

              <Box mt={20} width={300} height={35}>
                <Button disabled={isLoading} type="submit">
                  Sign up
                </Button>
              </Box>
            </form>
          </Flex>
        </Card>

        <Card width={345} mt={20}>
          <Flex alignItems="center" justifyContent="center">
            <InputLabel>Already have an account?</InputLabel>
            <Box width={5} />
            <HyperLink href={PublicRoutes.LOGIN} color={Colors.blue} width="1" fontSize="14px">
              Sign in
            </HyperLink>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default SignUp;
