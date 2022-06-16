import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
import table from '../assets/images/table.png'
import paddle from '../assets/images/paddle.png'

const TableMarker = ({ key, title, position, numberOfTables, location, payToPlay, description, verified }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const clickMarker = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Marker
        title={title}
        icon={paddle}
        position={position}
        onClick={clickMarker}
      >
        {isOpen && <InfoWindow position={position}>
          <div className='info-window'>
            <img src={table} alt='Ping pong table graphic'/>
            {numberOfTables < 2
              ? <p className='info-line'>{`${numberOfTables} ${location} table`}</p>
              : <p className='info-line'>{`${numberOfTables} ${location} tables`}</p>
            }
            {payToPlay === 'yes' && <p className='info-line'>{`$ pay to play $`}</p>}
            {description && <p className='info-line'>{`"${description}"`}</p>}
          </div>
        </InfoWindow>}
      </Marker>
    </>
  )
}

export default TableMarker