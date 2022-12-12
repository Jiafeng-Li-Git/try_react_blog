import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { Form } from 'semantic-ui-react'
import { Button } from 'antd'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import Blog from './Blog'

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
  ){
    createAuthor(data: {username: $username, password: $password}){
      id username password
    }
  }
`

export default function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result){
      console.log(result);
      props.history.push('/');
    },
    variables: {username: username, password: password}
  })

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={onSubmit} noValidate>
        <input name='username' type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input name='password' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Register</button>
        <span>Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}
