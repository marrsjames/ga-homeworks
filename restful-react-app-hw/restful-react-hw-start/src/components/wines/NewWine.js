/* eslint-disable comma-dangle */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { postNewWine } from '../../lib/api'

const NewWine = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      name: '',
      origin: '',
      image: '',
      tastingNotes: '',
      grape: '',
      abv: '',
      price: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state)

    try {
      const res = await postNewWine(state.formData)
      console.log('response from api', res)
      history.push(`/wines/${res.data._id}`)
    } catch (err) {
      console.log('error registering user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
      //   putting in square bracket takes it as a literal.
      //   the name of the input (password, username, email) is used to update that part of the object
    }
    setState({ formData })
    console.log(e)
  }

  return (
    <section className='section'>
      <div className='containter'>
        <div className='columns'>
          <form
            onSubmit={handleSubmit}
            className='column is-half is-offset-one-quarter'
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
              <label className='label'>Origin</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Origin'
                  name='origin'
                  value={state.formData.origin}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Tasting Notes</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Tasting Notes'
                  name='tastingNotes'
                  value={state.formData.tastingNotes}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Grape</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Grape'
                  name='grape'
                  value={state.formData.grape}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>abv</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='abv'
                  name='abv'
                  value={state.formData.abv}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Price</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Price'
                  name='price'
                  value={state.formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Image URL</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Image URL'
                  name='image'
                  value={state.formData.image}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <input
                type='submit'
                value='Submit'
                className='button is-full-width is-warning'
              ></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewWine
