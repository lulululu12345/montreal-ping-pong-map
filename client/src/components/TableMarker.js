import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'

const TableMarker = ({ key, title, position, numberOfTables, location, payToPlay, description, verified }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [tableInfo, setTableInfo] = React.useState(``)
  const [priceInfo, setPriceInfo] = React.useState(false)
  const [tableDescription, setTableDescription] = React.useState(false)

  const clickMarker = () => {
    setIsOpen(!isOpen)
  }

  const pricing = () => {
    if (payToPlay === 'yes') {
      setPriceInfo(`(Pay to play)`)
    }
  }

  React.useEffect(() => {
    if (numberOfTables === 1) {
      setTableInfo(`${numberOfTables} ${location} table`)
    }
    if (numberOfTables > 1) {
      setTableInfo(`${numberOfTables} ${location} tables`)
    }
    if (payToPlay === 'yes') {
      setPriceInfo(true)
    }
    if (description) {
      setTableDescription(true)
    }
  }, [])
  return (
    <>
      <Marker
        title={title}
        position={position}
        onClick={clickMarker}
      >
        {isOpen && <InfoWindow position={position}>
          <div className='info-window'>
            <h2 className='info-header'>{title}</h2>
            {numberOfTables < 2
              ? <p>{`${numberOfTables} ${location} table`}</p>
              : <p>{`${numberOfTables} ${location} tables`}</p>
            }
            {priceInfo && <p>{`$ pay to play $`}</p>}
            {tableDescription && <p>{description}</p>}
          </div>
        </InfoWindow>}
      </Marker>
    </>
  )
}

export default TableMarker