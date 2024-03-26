import React from "react";
import styled from "styled-components";
import PersonalColorMain from "./personal_color/PesonalColorMain";
const Section2Container = styled.div`
    width: 100%;
    height: 1200px;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color:#8ed1fc ;
`;
const Section2Main = ()=>{
    return(
        <Section2Container>
            <PersonalColorMain/>
        </Section2Container>
    );
};
export default Section2Main;
