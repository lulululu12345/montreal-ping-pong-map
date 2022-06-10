import React from 'react'
import tableService from '../services/table'

const AddTableForm = ({ position, setShowAddTableForm, setShowNewTableConfirmation, setShowMapClickInfoWindow }) => {
  const [numberOfTables, setNumberOfTables] = React.useState('1')
  const [location, setLocation] = React.useState('outdoor')
  const [payToPlay, setPayToPlay] = React.useState('no')
  const [description, setDescription] = React.useState('')

  const changeNumberOfTables = (event) => {
    setNumberOfTables(event.target.value)
  }

  const changeLocation = (event) => {
    setLocation(event.target.value)
  }

  const changePayToPlay = (event) => {
    setPayToPlay(event.target.value)
  }

  const changeDescription = (event) => {
    setDescription(event.target.value)
  }

  const submitForm = async (event) => {
    event.preventDefault()

    const newTableMarker = {
      position: position,
      numberOfTables: Number(numberOfTables),
      location: location,
      payToPlay: payToPlay,
      description: description,
      verified: false
    }

    const newTable = await tableService.add(newTableMarker)

    console.log('newTable', newTable)

    setShowAddTableForm(false)
    setShowMapClickInfoWindow(false)
    setShowNewTableConfirmation(true)
  }

  return (
    <div className='form-wrapper'>
      <h1 className='form-heading'>Add Table</h1>
      <form className='form' onSubmit={submitForm}>
        <div className='form-input'>
          <label htmlFor='numberOfTables'>Number of Tables:</label>
          <input id='numberOfTables' type='number' min='1' max='999' step='any' value={numberOfTables} onChange={changeNumberOfTables} />
        </div>
        <div className='form-input'>
          <label htmlFor='location'>Location:</label>
          <select id='location' value={location} onChange={changeLocation} >
            <option value='outdoor'>Outdoor</option>
            <option value='indoor'>Indoor</option>
          </select>
        </div>
        <div className='form-input'>
          <label htmlFor='payToPlay'>Pay to Play?</label>
          <select id='payToPlay' value={payToPlay} onChange={changePayToPlay}>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </div>
        <textarea className='form-textarea' placeholder='Table Description' value={description} onChange={changeDescription}></textarea>
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddTableForm