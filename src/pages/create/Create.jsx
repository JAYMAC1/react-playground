import React, { useState } from 'react'
import './create.scss'

const Create = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password, password2)
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Register With Us</h2>
        <div className='form-control'>
          <label htmlFor='username'>User Name</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Enter Email Address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Create Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Create Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            id='password2'
            name='password2'
            placeholder='Confirm password'
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create
