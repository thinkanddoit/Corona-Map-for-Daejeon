import React, { Component } from "react";
import styled from "styled-components";

class MapContent extends Component {
  render() {
    return <MapContents id="Mymap"></MapContents>; // 이부분이 지도를 띄우게 될 부분.
  }
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapContent;
