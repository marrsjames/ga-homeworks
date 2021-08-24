/* eslint-disable comma-dangle */
import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

const Login = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      console.log('response from api is', res)

      if (res.status === 200) {
        setToken(res.data.token)
        history.push('/wines')
      }
    } catch (err) {
      console.error('Error logging in user', err)
    }
    console.log(state)
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      // eslint-disable-next-line comma-dangle
      [e.target.name]: e.target.value,
    }
    setState({ formData })
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
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='holder'
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
              <input
                type='submit'
                value='login'
                className='button is-full-width is-warning'
              ></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
