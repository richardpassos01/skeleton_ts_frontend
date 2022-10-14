import * as React from "react";
import { Flex, Box } from "reflexbox/styled-components";
import {InputText,Header,Card,Title,Button,Line,HyperLink, Styles} from "@design-system";
import { useFormik } from "formik";
import { FormErrorMessages } from "@domain/shared/enums/FormErrorMessages";
import * as yup from "yup";
import useAuthentication from "@domain/public/hooks/useAuthentication";
import { DashboardRoutes } from "@domain/dashboard/routes";
import { PublicRoutes } from "@domain/public/routes";
import { useNavigate } from "react-router-dom";

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
      name: "",
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
        <Header />
        <Flex justifyContent="center">
          <Card width={450}>
            <Flex mt={20} mb={20} alignItems="center" justifyContent="center">
              <Title title="Sign in" />
            </Flex>
            <Flex alignItems="center" justifyContent="center" mb={20} mt={30}>
              <Box width={[320, 400]}>
                <form onSubmit={formik.handleSubmit}>
                  <InputText
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    invalid={formik.touched.email && formik.errors.email}
                    placeholder="Email"
                  />
                  <InputText
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    invalid={formik.touched.password && formik.errors.password}
                    placeholder="Password"
                  />
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt={20}
                    flexDirection="column"
                  >
                    <Box width={300} height={50}>
                      <Button
                        disabled={isLoading}
                        color={Styles.Theme.primary.blue}
                        type="submit"
                      >
                        Sign in
                      </Button>
                    </Box>
                  </Flex>
                </form>
                <Box mt={20}>
                  <Line />
                </Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  mt={20}
                  flexDirection="column"
                >
                  <Box width={200} height={40} mb={10}>
                  <HyperLink href={PublicRoutes.SIGN_UP}>
                      Create new Account
                  </HyperLink>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Card>
        </Flex>
    </>
  );
};

export default Login;
