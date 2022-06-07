import { useMemo } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const styles = require('./MapStyles.json')

const Map = () => {
  const center = useMemo(() => ({ lat: 45.505998689496344, lng: -73.56691460541067 }), [])
  return (
    <GoogleMap 
      options={{
        styles: styles
      }}
      zoom={11}  
      center={center} 
      mapContainerClassName='map-container'
    >
      <Marker 
        title={'Eventually will be a table'}
        key={2}
        position={center} 
      />
    </GoogleMap>
  )
}

export default Map