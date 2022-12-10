import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'


export default function Login() {

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>
          <Link to="/blog">Login</Link>
        </button>
        <span>Don't have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>

    </div>
  )
}