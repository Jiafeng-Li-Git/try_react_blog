import React from 'react'
import { usePost } from '../hooks/usePost.jsx'
import './blog.css'


export default function Blog() {

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
        <p>{t_content}</p>
        <img src={p_content} className='img'></img>
    </div>
  )
}