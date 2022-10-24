import { Field, FormikProvider, useFormik } from 'formik';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, FieldControl, GradientContainer } from '../common-components';
import { LOGIN_FORM_VALIDATION_SCHEMA } from '../form-validations';
import Logo from '../../assets/myalc.png';
import { useLogin } from '../custom-hooks';
import { toast } from 'react-toastify';

const StyledCard = styled(Card)`
  max-width: 500px;
  background: transparent;
  box-shadow: 10px 10px 35px -12px rgba(0, 0, 0, 0.75);
`;

const Login = () => {
  const onLoginSuccess = (token) => {
    console.log(token);
  };

  const { mutateAsync: login, isLoading } = useLogin({
    onSuccess: onLoginSuccess,
  });

  const handleLogin = (e) => {
    login(values)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      centerCode: '',
      password: '',
    },
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    onSubmit: handleLogin,
  });

  const { values, handleSubmit } = formik;

  return (
    <GradientContainer>
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <StyledCard className="px-3">
            <Card.Body>
              <div className="d-flex flex-column justify-content-evenly align-items-center mb-3">
                <img src={Logo} width="300" />
                <p className="text-muted">Login to MyALC</p>
              </div>
              <Field
                type="text"
                name="centerCode"
                label="Username"
                placeholder="Username"
                component={FieldControl}
                autoFocus
                disabled={isLoading}
              />
              <Field
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                component={FieldControl}
                disabled={isLoading}
              />
              <div className="d-flex justify-content-evenly align-items-center mb-2">
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="px-5"
                  isLoading={isLoading}
                >
                  Login
                </Button>
                <a className="mx-3 link">Forgot Password?</a>
              </div>
            </Card.Body>
          </StyledCard>
        </form>
      </FormikProvider>
    </GradientContainer>
  );
};

export default Login;
