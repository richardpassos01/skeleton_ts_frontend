import * as React from "react";
import { Flex, Box } from "reflexbox/styled-components";
import { InputText, Card, Title, Button, InputLabel } from "@design-system";
import { useFormik } from "formik";
import { FormErrorMessages } from "@domain/shared/enums/FormErrorMessages";
import * as yup from "yup";
import useAuthentication from "@domain/public/hooks/useAuthentication";
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

const UpdatePassword: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { updatePassword } = useAuthentication();
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
        await updatePassword(data);
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
          <Title>Reset password</Title>
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
                <InputLabel>Password</InputLabel>
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
                  Reset password
                </Button>
              </Box>
            </form>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default UpdatePassword;
