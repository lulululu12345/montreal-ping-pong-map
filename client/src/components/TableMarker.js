import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'

const TableMarker = ({ key, title, position, numberOfTables }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const clickMarker = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Marker
        key={key}
        title={title}
        position={position}
        onClick={clickMarker}
      >
        {isOpen && <InfoWindow position={position}>
          <div className='info-window'>
            <h2>{title}</h2>
            <p>{`Number of Tables: ${numberOfTables}`}</p>
          </div>
        </InfoWindow>}
      </Marker>
    </>
  )
}

export default TableMarker