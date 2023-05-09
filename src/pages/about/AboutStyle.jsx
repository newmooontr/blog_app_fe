import styled from "styled-components";
import Flex from '../../components/globalStyle/FlexStyle';

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  height: 40rem;
  width: 20rem;
  padding: 0.5rem;
  border-radius: 3px;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 150px;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;

`;

export const StyledImg = styled.div`
  width: 150px;
  margin-top: 20px;
  background:rgba(255, 255, 255, 0.1);
  
`;

export const Header = styled.h1`
  color:#3C3939;
  font-size: 2rem;
  text-align: center;
  
`;

export const Text = styled.h2`
color:#3C3939;
font-size: 1rem;
text-align: center;
    
`;

export const StyledIconImgWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
gap:20px
 
`;

