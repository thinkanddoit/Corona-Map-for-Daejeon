import React from "react";
import styled from 'styled-components';

const Card = styled.div`
background: #fff;
border-radius: 2px;
display: inline-block;
height: 200px;
margin: 1rem;
position: relative;
width: 200px;

box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export default function ConfirmPersionInfoBox(props) {

    return (
        <Card>
                <span>확진자 정보</span><br/>
                <span>확진 일자</span><br/>
                <span>거주지</span><br/>
                <span>조치사항</span><br/>
            
        </Card>
    );
}