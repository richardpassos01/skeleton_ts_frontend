import * as React from "react";
import { Flex, Box } from "reflexbox/styled-components";
import { InputText, Card, Title, Button, InputLabel, HyperLink, Colors } from "@design-system";
import { useFormik } from "formik";
import { FormErrorMessages } from "@domain/shared/enums/FormErrorMessages";
import * as yup from "yup";
import useAuthentication from "@domain/public/hooks/useAuthentication";
import { DashboardRoutes } from "@domain/dashboard/routes";
import { PublicRoutes } from "@domain/public/routes";
import { useNavigate } from "react-router-dom";
import PublicHeader from '@components/PublicHeader/PublicHeader';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(FormErrorMessages.EMAIL_FIELD)
    .required(FormErrorMessages.REQUIRED_FIELD),
  password: yup.string().required(FormErrorMessages.REQUIRED_FIELD),
});

const Login: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { login } = useAuthentication();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (data: any) => {
      try {
        setIsLoading(true);
        await login(data);
        return navigate(DashboardRoutes.DASHBOARD);
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
          <Title>Sign in</Title>
        </Flex>

        <Card width={345}>
          <Flex alignItems="center" justifyContent="center" mb={20} mt={30}>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <InputLabel>Email</InputLabel>
                <InputText
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  invalid={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box mt={20}>
                <Flex justifyContent="space-between" alignItems="center">
                  <InputLabel>Password</InputLabel>
                  <HyperLink href={PublicRoutes.UPDATE_PASSWORD} color={Colors.blue} width="1" fontSize="12px">
                    Forgot password?
                  </HyperLink>
                </Flex>
                <InputText
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  invalid={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box mt={20} width={300} height={35}>
                <Button
                  disabled={isLoading}
                  type="submit"
                >
                  Sign in
                </Button>
              </Box>
            </form>
          </Flex>
        </Card>

        <Card width={345} mt={20}>
          <Flex alignItems="center" justifyContent="center">
            <InputLabel>New user?</InputLabel>
            <Box width={5} />
            <HyperLink href={PublicRoutes.SIGN_UP} color={Colors.blue} width="1" fontSize="14px">
              Create an account
            </HyperLink>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default Login;
