import { useMemo, useEffect, useState } from 'react'
import { GoogleMap, InfoWindow } from '@react-google-maps/api'
import TableMarker from './TableMarker'
import AddTableForm from './AddTableForm'
import tableService from '../services/table'

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
  // Memoize the center lat and lng
  const montreal = useMemo(() => ({ lat: 45.505998689496344, lng: -73.56691460541067 }), [])
  // Map boundary
  const montrealBounds = {
    north: 45.78487,
    south: 45.33452,
    west: -74.26209,
    east: -73.06540
  }


  const clickMap = (event) => {
    setLatLng({ lat: event.latLng.lat(), lng: event.latLng.lng()})
    setShowMapClickInfoWindow(!showMapClickInfoWindow)
    if (showAddTableForm) {
      setShowAddTableForm(false)
    }
  }

  const addTable = () => {
    setShowAddTableForm(true)
  }

  const clickConfirmSubmission = () => {
    setShowNewTableConfirmation(false)
  }

  useEffect(() => {
    loadTables()
  }, [])

  const loadTables = async () => {
    const tables = await tableService.getAll()
    // setTableMarkers(tables.data)

    setTables(tables.data.map((table) => {
      return (
        <div key={table.id}>
          <TableMarker 
            position={table.position}
            numberOfTables={table.numberOfTables} 
            location={table.location}
            payToPlay={table.payToPlay}
            description={table.description}
            verified={table.verified}
          />
        </div>
      )
    })
    )
  }

  return (
    <GoogleMap 
      options={{
        styles: styles,
        restriction: {
          latLngBounds: montrealBounds,
          strictBounds: false
        }
      }}
      zoom={11}  
      center={montreal} 
      mapContainerClassName='map-container'
      onClick={clickMap}
    >
      {tables}
      {showMapClickInfoWindow && <InfoWindow position={latLng}>
        <div>
          {showAddTableForm
            ? <AddTableForm position={latLng} setShowAddTableForm={setShowAddTableForm} setShowMapClickInfoWindow={setShowMapClickInfoWindow} setShowNewTableConfirmation={setShowNewTableConfirmation} />
            : <button className='btn-addTable' onClick={addTable}>Add Table?</button>
          }
        </div>
      </InfoWindow>}
      {showNewTableConfirmation &&
      <div className='popup'>
        <h1 className='popup-heading'>Thank you for adding a new table!</h1>
        <h2>Your submission is currently under review</h2>
        <button onClick={clickConfirmSubmission}>Got it</button>
      </div>}
    </GoogleMap>
  )
}

export default Map