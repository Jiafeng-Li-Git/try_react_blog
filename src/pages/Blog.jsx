import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar.jsx';
import { usePost } from '../hooks/usePost.jsx'
import './blog.css'


export default function Blog() {
    const {state} = useLocation()
    var user = {
      username:'Jiafeng Li',
    }
    if(state!=null){
      user.username = state.username
    }
    var {error, data, loading} = usePost("Jay");

    var t_content = 'blog'
    var p_content = 'blog_picture'

    while (typeof(data) != 'undefined'){
      var t_content = data.author.posts[0].content.text
      var p_content = data.post.coverPhoto.url
      break
    }

  return (
    <div>
        <TopBar  user={user}/>
        <h1>Welcome, {user.username}, This is your blog!</h1>
        <p>{t_content}</p>
        <img src={p_content} className='img'></img>
    </div>
  )
}