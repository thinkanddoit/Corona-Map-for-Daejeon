class MapContent extends Component {
    componentDidMount() {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5009e1aa3eac24e829865f6471ae1d56&autoload=false";
      document.head.appendChild(script);
    }
  
    render() {
      return <MapContents id="Mymap"></MapContents>;
    }
  }
  
  const MapContents = styled.div`
    width: 100%;
    height: 100%;
  `;
  
  export default MapContent;