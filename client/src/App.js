import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import Map from './components/Map'
import './App.css';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    mapIds: [process.env.REACT_APP_MAP_ID]
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