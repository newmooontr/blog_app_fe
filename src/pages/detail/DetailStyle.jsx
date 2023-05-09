import styled from "styled-components";
import Flex from "../../components/globalStyle/FlexStyle";

export const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 400px;
  max-width: 768px;

  @media screen and (max-width: 550px) {
    max-height: unset;
    max-width: unset;
  }
`;

export const StyledIconImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size:medium;
  margin-bottom:20px ;
  div {
    display: flex;
    flex: 0;
    gap:5px;
    align-items: center;
  }
`;

export const StyledUser = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
  margin-left: 130px;

  div {
   
    font-size: 15px;
    
  }
`;

export const Header = styled.h1`
  color: black;
  font-size: 2rem;
  margin-top: 30px;
  
  

`;

export const StyledText = styled.h2`
  color: black;
  font-size: 1rem;
  padding: 20px;
  margin-top: auto;
  text-align: justify;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 400px;
  max-width: 768px;
  margin: auto;
  line-height: 20px;

  @media screen and (max-width: 550px) {
    max-height: unset;
    max-width: unset;
  }
`;
