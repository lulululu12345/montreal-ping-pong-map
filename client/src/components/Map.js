import { useMemo, useEffect, useState } from 'react'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import TableMarker from './TableMarker'
import AddTableForm from './AddTableForm'

const styles = require('./MapStyles.json')



const Map = () => {
  // Create a piece of state for the table objects - to be used for creating markers
  const [tables, setTables] = useState([])
  // State for mouse coordinates
  const [latLng, setLatLng] = useState(null)
  // State for adding a marker
  const [showMapClickInfoWindow, setShowMapClickInfoWindow] = useState(false)
  // State for the add table form
  const [showAddTableForm, setShowAddTableForm] = useState(false)
  // State for confirming new table submission
  const [showNewTableConfirmation, setShowNewTableConfirmation] = useState(false)
  // Memoize thet center lat and lng
  const center = useMemo(() => ({ lat: 45.505998689496344, lng: -73.56691460541067 }), [])
  // Dummy data for working with markers
  const tableMarkers = [
    {
      location: { lat: 45.53494, lng: -73.55543 },
      numberOfTables: 1,
      description: '',
      _id: Math.floor(Math.random() * Date.now())
    },
    {
      location: { lat: 45.53328, lng: -73.55590 },
      numberOfTables: 1,
      description: '',
      _id: Math.floor(Math.random() * Date.now())
    }
  ]

  const clickMap = (event) => {
    setLatLng({ lat: event.latLng.lat(), lng: event.latLng.lng()})
    setShowMapClickInfoWindow(!showMapClickInfoWindow)
  }

  const addTable = () => {
    setShowAddTableForm(true)
  }

  const clickConfirmSubmission = () => {
    setShowNewTableConfirmation(false)
  }

  // Map the tableMarkers(dummy data) array on render
  useEffect(() => {
    setTables(tableMarkers.map((table) => {
      return (
        <div key={table._id}>
          <TableMarker 
            title={'Ping Pong Table'}
            position={table.location}
            numberOfTables={table.numberOfTables} 
          />
        </div>
      )
    })
    )
  }, [])

  return (
    <GoogleMap 
      options={{
        styles: styles
      }}
      zoom={11}  
      center={center} 
      mapContainerClassName='map-container'
      onClick={clickMap}
    >
      {tables}
      {showMapClickInfoWindow && <InfoWindow position={latLng}>
        <div>
          <h1>add table</h1>
          { showAddTableForm
            ? <AddTableForm position={latLng} setShowAddTableForm={setShowAddTableForm} setShowMapClickInfoWindow={setShowMapClickInfoWindow} setShowNewTableConfirmation={setShowNewTableConfirmation} />
            : <button onClick={addTable}>Add Table</button>
          }
        </div>
      </InfoWindow>}
      {showNewTableConfirmation &&
        <div className='popup'>
          <h1>Thank you for adding a new table!</h1>
          <h2>Your submission is currently under review</h2>
          <button onClick={clickConfirmSubmission}>Got it</button>
        </div>
      }
    </GoogleMap>
  )
}

export default Map