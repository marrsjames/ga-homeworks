import React from 'react'
import { getAllWines } from '../../lib/api'
import WineCard from './WineCard'

const WineIndex = () => {
  const [state, setState] = React.useState({ wines: [] })

  const fetchWinesFromApi = async () => {
    try {
      const res = await getAllWines()
      setState({ wines: res.data })
    } catch (err) {
      console.error('an error ocurred fetching all wines', err)
    }
  }

  React.useEffect(() => {
    fetchWinesFromApi()
  }, [])

  console.log('state from wine index', state)

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {state.wines.map((wine) => (
            // eslint-disable-next-line react/jsx-key
            <WineCard
              key={wine.id}
              _id={wine._id}
              name={wine.name}
              origin={wine.origin}
              image={wine.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WineIndex
