/* eslint-disable comma-dangle */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../lib/api'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state)

    try {
      const res = await registerUser(state.formData)
      console.log('response from api', res)
      if (res.status === 200) {
        history.push('/login')
      }
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
            className='column is-half is-offset-one-quarter box'
          >
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Username'
                  name='username'
                  value={state.formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Email'
                  name='email'
                  value={state.formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={state.formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Confirm Password</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Confirm Password'
                  name='passwordConfirmation'
                  type='password'
                  value={state.formData.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='field'>
              <button
                className='button is-fullwidth is-warning'
                type='submit'
                value='Register'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
