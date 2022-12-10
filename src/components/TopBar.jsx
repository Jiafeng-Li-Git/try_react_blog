import './topBar.css'
import React from 'react'
import {Link} from 'react-router-dom'


const nav_links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]


export default function TopBar(){
    return (
        <nav className='topBar'>
            <span className="navspan">first-react-blog</span>
                <ul>
                    { nav_links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
            ))}
        </ul>
        </nav>
    )
}
