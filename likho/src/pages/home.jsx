
import {React} from 'react'
import {useFetch} from '../component/usefetch'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function home() {
   //custom hook for fetching data is used
    const {blogs:data,loading,error}=useFetch('http://localhost:8000/blogs')


  return (
    <div>
        {loading&&<div>Loading...</div>}
        {error&&<div>Error</div>}
        {   
            data && data.map(blog=>{
                return <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h6>{blog.author}</h6>
                    <p>{blog.body}</p>
                    <Link to={`/blogs/${blog.id}`}>
                    <Button>Read More</Button>
                    </Link>
                </div>
            })
        }
    </div>
  )
}

export default home