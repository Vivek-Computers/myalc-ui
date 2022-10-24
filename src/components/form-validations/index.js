import * as yup from "yup";

export const LOGIN_FORM_VALIDATION_SCHEMA = yup.object().shape({
  centerCode: yup.string().required("Username is required."),
  password: yup.string().required("Password is required."),
});
