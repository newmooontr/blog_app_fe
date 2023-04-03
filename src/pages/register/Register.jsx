import React, { useState } from 'react'
import { FormContainer, 
  Header, 
  RegisterContainer, 
  StyledButton, 
  StyledForm, 
  StyledInput } from './RegisterStyle';

import axios from "axios";

const Register = () => {

  const [userInfo,setUserInfo] = useState({
    username:"",
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    password2:""
  });


  const url = "http://127.0.0.1:8000/user/register/";

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const info = {userInfo};

    const {response} = await axios.post(url, userInfo, {headers:{'Content-Type': 'application/json'}});
    console.log(response);

  }

  const handleOnInputChange = (e)=>{
    e.preventDefault();
    setUserInfo({...userInfo, [e.target.name]:e.target.value});

  }


  return (
    <RegisterContainer>
      <FormContainer>
        <Header>{"Sign Up"}</Header>
        <StyledForm onSubmit={handleSubmit}>
         <StyledInput onChange={handleOnInputChange} name='username' placeholder='User Name' type="text"/>
          <StyledInput onChange={handleOnInputChange} name='first_name' placeholder='First Name' type="text"/>
          <StyledInput onChange={handleOnInputChange} name='last_name' placeholder='Last Name' type="text"/>
          <StyledInput onChange={handleOnInputChange} name='email' placeholder='E-Mail' type="text"/>
          <StyledInput onChange={handleOnInputChange} name='password' placeholder='Password' type="password"/>
          <StyledInput onChange={handleOnInputChange} name='password2' placeholder='Confirm Password' type="password"/>
          <StyledButton type='submit'>Register</StyledButton>
        </StyledForm>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
