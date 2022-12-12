import React from 'react'
import TopBar from "./components/TopBar";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs';
import './pages/login.css'

var user = {
  username:'Jiafeng Li',
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <TopBar user={user}/>
      <Home/>
    </div>
  },
  {
    path: "/login",
    element: <div>
      <TopBar user={user}/>
      <Login/>
    </div>,
  },
  {
    path: "/register",
    element: <div>
      <TopBar user={user}/>
      <Register/>
    </div>,
  },
  {
    path: "/blog",
    element: <div>
      <Blog/>
    </div>,
  },
  {
    path: "/contact-us",
    element: <div>
      <TopBar user={user}/>
      <ContactUs/>
    </div>,
  },
])

function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
