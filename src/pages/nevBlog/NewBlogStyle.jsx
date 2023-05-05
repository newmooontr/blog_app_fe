import styled from 'styled-components'
import Flex from '../../components/globalStyle/FlexStyle'


export const NewBlogContainer= styled(Flex)`
height: 100vh;
background-image: url('https://as2.ftcdn.net/v2/jpg/05/17/71/03/1000_F_517710378_oDSteNpClPDdzhiPWhm2TDRIM1tEwInH.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export const FormNewBlog= styled(Flex)`
  width: 45rem;
  height: 50rem;
  max-width: 50rem;
  background:rgba(242, 177, 98, 0.5);/* Color Theme Swatches in Hex */
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: black;
  font-size: 3rem;
  

`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;


export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;


export const StyledButton = styled.button`

  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  border: none;
  margin: 1rem;
  width: 15rem;
  margin-left: 8rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;