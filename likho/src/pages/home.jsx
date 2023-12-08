
import {React} from 'react'
import {useFetch} from '../component/usefetch'
import { Link } from 'react-router-dom'
import { url } from '../url'

function home() {
   //custom hook for fetching data is used
    const {blogs:data,loading,error}=useFetch(`${url}/blogs`)


  return (
    <div>
        {loading&&<div>Loading...</div>}
        {error&&<div>Error</div>}
        {   
            data && data.map(blog=>{
                return <div key={blog.id} className=' shadow-md p-4 my-4 max-w-sm'>
                    <h1 className='text-lg font-semibold'>{blog.title}</h1>
                    <h6 className='text-gray-500'>-{blog.author}</h6>
                    <Link to={`/blogs/${blog.uid}`}>
                    <p className='text-primary font-medium hover:text-black'>Read the Blog</p>
                    </Link>
                </div>
            })
        }
    </div>
  )
}

export default home