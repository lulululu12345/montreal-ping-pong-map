// import { useState } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import Map from './components/Map'
import './App.css';


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhzpBCgy9vMfzQLCo5MtxtkgkWt-6-TRs',
    mapIds: ['d36d858f2192af61']
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="App">
      <h1>Montreal Ping Pong Map</h1>
      <Map />
    </div>
  )
}

export default App;