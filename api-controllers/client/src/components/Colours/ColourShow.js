import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getSingleColour, deleteColour } from '../../api/ColoursApi'

const ColourShow = () => {
  const { id } = useParams()
  const history = useHistory()
  const [state, setState] = React.useState({ colour: null })

  const getSingleColourFromApi = async () => {
    try {
      const res = await getSingleColour(id)
      setState({ colour: res.data })
      
    } catch (err) {
      console.error(`An error occurred fetching colour ${id}`, err)
    }
  }
console.log(state)
  React.useEffect(() => {
    getSingleColourFromApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (state.colour === null) {
    return <h1>loading...</h1>
  }

    const handleDelete = async () => {
      const colourIdToDelete = id
      try {
        await deleteColour(colourIdToDelete)
        history.push('/colours')
      } catch (err) {
        console.error(`Failed to delete colour ${id}`, err)
      }
    }

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='title has-text-centered'>{state.colour.name}</h2>
        <hr />
        <div className='columns'>
          <div className='column is-half'>
            <h4 className='title is-4'>Hex Code</h4>
            <hr />
            <p>{state.colour.hexCode}</p>
            <hr />
            <h4 className='title is-4'>Primary colour status</h4>
            <p>{String(state.colour.primary)}</p>
            <hr />
            <Link to={`/colours/${id}/edit`} className='button is-warning'>
                Edit Colour
                </Link>
            <button className='button is-danger' onClick={handleDelete}>
              Delete Colour
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColourShow