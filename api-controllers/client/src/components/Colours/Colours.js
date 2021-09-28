import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllColours } from '../../api/ColoursApi'

const Colours = () => {
  const [colours, setColours] = useState([])

  useEffect(() => {
    getAllColours().then((colours) => setColours(colours))
  }, [])

  return (
    <>
      <h1>colours</h1>
      <hr />
      {colours.map((colour) => (
        <div>
          <div key={colour._id}>
            <h2>{colour.name}</h2>
            <h3>Hex code is {colour.hexCode}</h3>
            <h3>ID is {colour._id}</h3>
            <h3>Primary colour status is {String(colour.primary)}</h3>
            <hr />
          </div>
        </div>
      ))}
    </>
  )
}

export default Colours
