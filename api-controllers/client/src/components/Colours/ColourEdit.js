import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { editColour, getSingleColour } from '../../api/ColoursApi'



const ColourEdit = () => {
  const { id } = useParams()
  const history = useHistory()
  const [state, setState] = React.useState({ formData: null })

  const getSingleColourFromApi = async () => {
    try {
      const res = await getSingleColour(id)
      setState({ formData: res.data })
    } catch (err) {
      console.error(`An error occurred fetching colour ${id}`, err)
    }
  }
//  console.log(state)

  React.useEffect(() => {
    getSingleColourFromApi()
  }, [])

  if (state.formData === null) {
    return <h1>loading...</h1>
  }



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(state.formData)
      const result = await editColour(id, state.formData)
       console.log(result.data._id)
      history.push(`/colours/${result.data._id}`)
    } catch (err) {
      console.log('error creating colour', err)
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    const formData = {
      ...state.formData,
      [name]: value,
    }
    setState({ formData })
  }

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='title has-text-centered'>Edit colour</h2>
        <hr />
        <div className='columns'>
          <form
            onSubmit={handleSubmit}
            className='column is-half is-offset-one-quarter box'
          >
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Name'
                  name='name'
                  value={state.formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Hex code</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Hex code'
                  name='hexCode'
                  value={state.formData.hexCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Primary colour?</label>
              <div className='control'>
                <input
                  className='checkbox'
                  name='primary'
                  type='checkbox'
                  checked={state.formData.primary}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <input
                className='button is-fullwidth is-warning'
                type='submit'
                value={`Add ${state.formData.name || 'new colour'}`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ColourEdit