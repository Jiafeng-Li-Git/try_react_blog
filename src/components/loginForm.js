import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import getPassword from '../hooks/getPassword.jsx'
import Blog from '../pages/Blog.jsx';
import '../pages/login.css'


function LoginForm({ Login }){
    const [user, setUser] = useState({username: ""});
    const [details, setDetails] = useState({username: "", password: ""});
    const [error, setError] = useState("");
    var data = getPassword(details.username)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(data)

        if (details.password == data.author.password){
            setUser({username:details.username})
        } else{
            setError("Password is not correct!")
        }
    }

    return (
        <div className='auth'>
          <h1>Login</h1>
          <form onSubmit={onSubmit} noValidate>
            <input name='username' type='text' placeholder='username' value={details.username} onChange={(e) => setDetails({...details, username:e.target.value})}/>
            <input name='password' type='password' placeholder='password' value={details.password} onChange={(e) => setDetails({...details, password:e.target.value})}/>
            <button className='Button' type='submit'>
              <Link to="/blog" state={details}>Login</Link>
            </button>
            {(error != "") ? (<div>{error}</div>) : ''}
            <span>Don't have an account?
              <Link to="/register">Register</Link>
            </span>
          </form> 
        </div>
      )
}

export default LoginForm;