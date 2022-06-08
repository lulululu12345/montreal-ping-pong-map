import React from 'react'

const AddTableForm = ({ position, setShowAddTableForm, setShowNewTableConfirmation, setShowMapClickInfoWindow }) => {
  const [numberOfTables, setNumberOfTables] = React.useState('1')
  const [location, setLocation] = React.useState('outdoorUncovered')
  const [windProtection, setWindProtection] = React.useState('none')

  const changeNumberOfTables = (event) => {
    setNumberOfTables(event.target.value)
  }

  const changeLocation = (event) => {
    setLocation(event.target.value)
  }

  const changeWindProtection = (event) => {
    setWindProtection(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault()

    const newTableMarker = {
      position: position,
      numberOfTables: Number(numberOfTables),
      location: location,
      windProtection: windProtection
    }

    setShowAddTableForm(false)
    setShowMapClickInfoWindow(false)
    setShowNewTableConfirmation(true)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor='numberOfTables'>Number of Tables</label>
          <input id='numberOfTables' type='number' min='1' max='999' step='any' value={numberOfTables} onChange={changeNumberOfTables} />
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <select id='location' value={location} onChange={changeLocation} >
            <option value='outdoorUncovered'>Outdoor - Uncovered</option>
            <option value='outdoorCovered'>Outdoor - Covered</option>
            <option value='indoor'>Indoor</option>
          </select>
        </div>
        <div>
          <label htmlFor='windProtection'>Wind Protection</label>
          <select id='windProtection' value={windProtection} onChange={changeWindProtection}>
            <option value='none'>{`None`}</option>
            <option value='some'>{`Some`}</option>
            <option value='plenty'>{`Plenty`}</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddTableForm