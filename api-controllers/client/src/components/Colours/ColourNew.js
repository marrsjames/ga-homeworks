import React from 'react'
import { useHistory } from 'react-router'
import { createColour } from '../../api/ColoursApi'

const ColourNew = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      name: '',
      hexCode: '',
      primary: false,
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(state.formData)
      const result = await createColour(state.formData)
      console.log(result)
      //   history.push(`/colours/${result.data._id}`)
      history.push(`/colours`)
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
        <h2 className='title has-text-centered'>Create new colour</h2>
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

export default ColourNew
