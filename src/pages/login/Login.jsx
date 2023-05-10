import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledInput,
  StyledForm,
  StyledError,
} from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthService from "../../common/auth/AuthService";
import { toastWarnNotify } from "../../helpers/ToastNotify";



const Login = () => {
  const navigate = useNavigate();
  const authService = useAuthService();

  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const url = "http://127.0.0.1:8000/user/login/";

  const handleOnInputChange = (e, value) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

    if (errorMessage !== "") {
      if (userInfo.username.length > 2 && userInfo.password.length > 2) {
        setErrorMessage("");
      }
    }
  };
  // şifre: testPass01
  // email: hilal@test.com
  // username: ahmet
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInfo.username.length > 2 && userInfo.password.length > 2) {
      try {
        const { data } = await axios.post(url, userInfo, {
          headers: { "Content-Type": "application/json" },
        });

        console.log(data);

        if (data.token) {
          authService.setUser(data);
          navigate("/home");
        } else {
          toastWarnNotify("Please login to search a blog");
        }
      } catch {
        toastWarnNotify("Please login to search a blog");
      }
    } else {
      toastWarnNotify("Username and password at least 3 characters");
    }

    // sessionStorage.setItem("user", JSON.stringify(userInfo));
    // navigate(-1);
    console.log(userInfo);
  };



  return (
    <LoginContainer>
      <FormContainer>
        <Header>{"Lütfen Giriş Yapın"}</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={handleOnInputChange}
            name="username"
            placeholder="Enter Username"
            type="text"
          />
          <StyledInput
            onChange={handleOnInputChange}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          <StyledButton type="submit">Login</StyledButton>

          <StyledError>{errorMessage}</StyledError>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
