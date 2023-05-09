import styled from "styled-components"

const Flex=styled.div`
    
    display: flex;
    justify-content:${({justify})=>(justify ? justify : "center")};
    align-items: ${({align})=>(align ? align : "unset")};
    flex-wrap:${({wrap})=> wrap && wrap}

`;
export default Flex;