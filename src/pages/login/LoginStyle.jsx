import styled from 'styled-components';
import Flex from '../../components/globalStyle/FlexStyle';
import { Field,Form,ErrorMessage } from 'formik';


 export const LoginContainer= styled.div`
  height: 90vh;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  `;


export const FormContainer= styled(Flex)`
  width: 30rem;
  min-height: 400px;
  background:rgba(255, 255, 255, 0.1);/* Color Theme Swatches in Hex */
  margin: auto;
  border-radius: 15px;
  box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  flex-direction: column;
`;


export const Header = styled.h1`
  color:#3C3939;
  font-size: 1.5rem;
  text-align: center;

`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;


export const StyledInput = styled(Field)`
  height: 3rem;
  font-size: 1rem;
  border-radius: 5px;
  background: transparent;
  border: 1px #3d3939 solid;
  border-radius: 8px;
  color: black;
  margin: 1rem;
  text-indent: 1rem;
`;


export const StyledButton = styled.button`

  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px;
  background: #76D7C4;
  border-radius: 5px;
  color: #e5e0e0;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledError = styled(Form)`
  color:red;
  font-weight: bold;
  text-align: center;
  font-size: medium;

`

