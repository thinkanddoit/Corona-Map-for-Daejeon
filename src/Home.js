import React from "react";

export default function Home() {
    const homeStyle = {
        fontFamily:"serif",
        textAlign:"center",
        fontSize:"25px"
    }
    return (
        <div style={homeStyle}>
            <br/>
            대전 광역시 코로나 19 현황 사이트의 정보를 담고있는 사이트 프로토 타입입니다.<br/><br/>
            <a href="https://www.daejeon.go.kr/corona19/" target="_blank">대전광역시 코로나19현황 사이트</a>
        </div>
    );
  }