import { useState } from 'react'
import { getAdmin } from '../redux/adminReducer'
import { connect } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Admin = ({ getAdmin }) => {
  const [state, setState] = useState({
    userName: '',
    password: ''
  })

  const history = useHistory()

  const loginAdmin = async (e) => {
    e.preventDefault()
    const { userName, password } = state

    try {
      const user = await axios.post('/admin/login', { userName, password })
      getAdmin(user.data)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  const changeHandler = e => setState({
    ...state,
    [e.target.name]: e.target.value
  })
  return (
    <div className='auth-component'>
      <h1 className='auth-title'>Sign In</h1>
      <form className='auth-sign-in' onSubmit={(e => loginAdmin(e))}>
        <input
          className='auth-input-username'
          placeholder='username'
          name='username'
          onChange={(e) => changeHandler(e)}
        />
        <input
          className='auth-input-password'
          placeholder='Password'
          name='password'
          onChange={(e) => changeHandler(e)}
        />
        
        <button className='sign-in-button' type='submit'>Sign in</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getAdmin })(Admin)