import { useMemo, useEffect, useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const styles = require('./MapStyles.json')



const Map = () => {
  // Create a piece of state for the table objects - to be used for creating markers
  const [tables, setTables] = useState([])
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
  // Map the tableMarkers(dummy data) array on render
  useEffect(() => {
    setTables(tableMarkers.map((table) => {
      return (<Marker
        key={table._id}
        title={'Table'}
        position={table.location}
        />)
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
    >
      {tables}
    </GoogleMap>
  )
}

export default Map