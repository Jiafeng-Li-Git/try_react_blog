import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useMutation, gql, useQuery } from '@apollo/client'
import LoginForm from '../components/loginForm'

export default function Login(props) {

  return(
    <div>
      <LoginForm Login={Login} />
    </div>
  )
}