import React, { useState, useEffect } from 'react'
import { getAllRappers } from '../../api/RappersApi'

import gzaImg from '../../images/huge_avatar.png'

const Home = () => {
  const [rappers, setRappers] = useState([])

  useEffect(() => {
    getAllRappers().then((rappers) => setRappers(rappers))
  }, [])

  return (
    <>
      <h1>rappers</h1>
      <img src={gzaImg} alt='gza' />
      {rappers.map((rapper) => (
        <div key={rapper._id}>
          <h2>
            {rapper.name} AKA {rapper.AKA}
          </h2>
          <p>{rapper.yearOfBirth}</p>
          <p>createdBy {rapper.createdBy}</p>
        </div>
      ))}
    </>
  )
}

export default Home
