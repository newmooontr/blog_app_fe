// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormContainer, Header, LoginContainer, StyledButton, StyledInput,StyledForm } from "./LoginStyle";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter a username ")
    .min(4, "username must have min 4 chars"),
  password: yup
    .string()
    .required("Please enter a password ")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});


const Login2 = () => {
  

  const onFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  const formValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if(!values.password) {

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  }

  

  return (
  <LoginContainer>
    <FormContainer>
      <Header>{"Lütfen Giriş Yapın"}</Header>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onFormSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm style={{fontSize:"15px"}}>
            <StyledInput type="text" name="username" placeholder="User Name"/>
            <ErrorMessage name="username" component="div"/>
            <StyledInput type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  </LoginContainer>
)};

export default Login2;
