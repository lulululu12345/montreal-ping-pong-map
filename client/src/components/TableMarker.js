import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'

const TableMarker = ({ key, title, markerPosition, infoPosition, numberOfTables }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const clickMarker = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Marker
        key={key}
        title={title}
        position={markerPosition}
        onClick={clickMarker}
      >
        {isOpen &&
          <InfoWindow 
            position={infoPosition}
          >
            <div className='info-window'>
              <h2>{title}</h2>
              <p>{`Number of Tables: ${numberOfTables}`}</p>
            </div>
          </InfoWindow>
        }
      </Marker>
    </>
  )
}

export default TableMarker