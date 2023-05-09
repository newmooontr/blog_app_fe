import styled from "styled-components";
import Flex from '../../components/globalStyle/FlexStyle'

export const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 70px;
  margin-bottom: 50px;
  gap: 2vw;
`;

export const CardContainer = styled(Flex)`
  flex: 0 30%;
  max-width: 30%;
  height: 32rem;
  width: 30rem;
 
  border-radius: 3px;
  margin: auto;
  
  
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    transition: all 0.3s ease-in;
    transform: scale(105%);
  }

`;



export const CardImage = styled.img` 
width: 100%;
height: 300px;
margin-top: 0;

    
`;


export const Header = styled.h1`
  color: blue;
  font-size: 1.5rem;
  
`;

export const Text = styled.h2`
color: black;
font-size: 0.9rem;
line-height: 20px;
    
`;

export const UserList = styled.div`
display:flex;
justify-content:start;
align-items: baseline;
gap: 10px;
font-size: small;
font-weight: bold;

`;

export const StyledIconImgWrapper = styled.div`
display: flex;
margin-top: 20px;
gap:30px;
font-size: medium;

div{
  display: flex;
    flex: 0;
    gap:5px;
    align-items: center;
}
 
`;

export const ContentWrapper = styled.div`
padding: 5px 15px;

`

