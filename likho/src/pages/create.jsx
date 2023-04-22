import { Button } from '@mui/material'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function create() {
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [body,setBody]=useState('')
    const [adding,setAdding]=useState(false)

    const history =useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blogs={title,author,body}
         setAdding(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(blogs)
        })
        .then(()=>{
            setAdding(false)
            setTitle('')
            setAuthor('')
            setBody('');
            history('/')
        })
    }

  return (
    <div form-component >
        <h3 className='font-semibold text-lg my-6'>Create a new Blog</h3>
        <form from-box onSubmit={handleSubmit} className='border-2 border-gray-500 flex justify-center'>
            <label>Blog title</label>
            <input type="text" required onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <label>Author</label>
            <input type="text" required onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <label>Body</label>
            <input type="text" required onChange={(e)=>setBody(e.target.value)} value={body}></input>
            {
                adding?<div>adding</div>:
                <input type="submit"></input>
            }
            
        </form>
    </div>
  )
}

export default create