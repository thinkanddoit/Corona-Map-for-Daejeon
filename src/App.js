import React, { useState, useEffect } from 'react'
const APP_KEY = '5009e1aa3eac24e829865f6471ae1d56'
const divBtnOpt = {
  width: '50px',
  height: '50px',
  position: 'fixed',
  top: '100px',
  zIndex: '10',
}

const App = () => {
  const [map, setMap] = useState(null)
  const [markerArr, setMarkerArr] = useState([])
  const [locationArr, setLocationArr] = useState([])

  const getLocation = async id => {
    const data = await fetch(`http://48950abe0472.ngrok.io/getdata`).then(
      res =>{
        return res.json();
      }
    )
    console.log(data)
    const dataJSON = await data.json()
    //setLocationArr(dataJSON.location)]
    setLocationArr({mapX:36.350473962094654, mapY:127.3848508837152})
  }

  const createMap = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
      const { kakao } = window
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap')
        let options = {
          center: new kakao.maps.LatLng(36.350473962094654, 127.3848508837152),
          level: 8,
        }
        const createdMap = new kakao.maps.Map(container, options)
        setMap(createdMap)
      })
    }
  }

  const createMarker = () => {
    const { kakao } = window
    const tempArr = []
    locationArr.forEach(e => {
      tempArr.push(
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(36.350473962094654, 127.3848508837152),
        })
      )
    })
    setMarkerArr(tempArr)
  }

  const deleteMarker = () => markerArr.forEach(e => e.setMap(null))

  useEffect(() => {
    getLocation(1) // location 정보 fetch
    createMap()
  }, [])

  // marker 생성 + 표시
  useEffect(() => map && locationArr.length && createMarker(), [
    map,
    locationArr,
    
  ])

  return (
    <div className="App">
      <div id="Mymap" style={{ width: '100vw', height: '100vh' }}></div>
    </div>

  )
}

export default App