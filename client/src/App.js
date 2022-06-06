import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Map from './components/Map'
import './App.css';


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhzpBCgy9vMfzQLCo5MtxtkgkWt-6-TRs'
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="App">
      <h2>Montreal Ping Pong Map</h2>
      <Map/>
    </div>
  )
}

export default App;