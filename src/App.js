import React from 'react'
import TopBar from "./components/TopBar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs';
import './pages/login.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <TopBar/>
      <Home/>
    </div>
  },
  {
    path: "/login",
    element: <div>
      <TopBar/>
      <Login/>
    </div>,
  },
  {
    path: "/register",
    element: <div>
      <TopBar/>
      <Register/>
    </div>,
  },
  {
    path: "/blog",
    element: <div>
      <TopBar/>
      <Blog/>
    </div>,
  },
  {
    path: "/contact-us",
    element: <div>
      <TopBar/>
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
