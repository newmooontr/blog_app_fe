import styled from "styled-components";
import Flex from '../../components/globalStyle/FlexStyle'

export const CardContainer = styled(Flex)`
  flex-direction: column;
  height: 25rem;
  width: 25rem;
  padding: 0.5rem;
  border-radius: 3px;
  margin: auto;
  margin-top: 70px;
  
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }

`;



export const CardImage = styled.img`
 width: 100px;
 margin-top: 20px;
    
`;


export const Header = styled.h1`
  color: blue;
  font-size: 3rem;
  
`;

export const Text = styled.h2`
color: black;
font-size: 1rem;
    
`;

export const StyledIconImgWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
gap:20px
 
`;