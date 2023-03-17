import React from 'react'
import { Navigate } from 'react-router-dom';
import { FormContainer, Header, LoginContainer, StyledButton, StyledImg, StyledInput, StyledForm } from './LoginStyle'
import { useNavigate } from 'react-router-dom';

const Login = () => {

const navigate = useNavigate();
  
  const userInfo={
    username:"admin"
  }


const handleSubmit = (e) => {
  e.preventDefault();
  sessionStorage.setItem("user",JSON.stringify(userInfo))
    navigate(-1)
  }


  return (
    <LoginContainer>
      <FormContainer>
      <Header>{"SİNOP"}</Header>
      <StyledForm onSubmit={handleSubmit}>
      <StyledInput placeholder='Enter Username' type= 'text'/>
      <StyledInput placeholder='Enter Password' type= 'text'/>
      <StyledButton type='submit'>Login</StyledButton>
      </StyledForm>
      </FormContainer>
    </LoginContainer>
    
  )
}

export default Login