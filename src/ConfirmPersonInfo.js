import React from "react";
import ConfirmPersionInfoBox from './ConfirmPersionInfoBox';
import styled from 'styled-components';

const Container = styled.div`
background: #e2e1e0;
text-align: center;
`
export default function ConfirmPersonInfo() {
    
    return (
        <Container>
            확진자 정보
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
            <ConfirmPersionInfoBox />
        </Container>
    );
  }