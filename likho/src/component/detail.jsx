import { useParams } from "react-router-dom";
import { useFetch } from "./usefetch";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Details=()=>{
    
    const {id}=useParams();
    const {blogs,loading,error}=useFetch(`http://localhost:8000/blogs/${id}`);
    const history =useNavigate();

    const handleClick=()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'delete'
        })
        .then(()=>{
            history('/');
            console.log('deleted successfully')
    })
    }

    return(
        <div>
            {
                loading?
                <h4>Loading...</h4>
                :
                error?
                <h1>{error}</h1>
                :
                <div>
                    <h1 className="font-semibold">{blogs.title}</h1>
                    <p className="text-gray-500">-{blogs.author}</p>
                    <article className="my-6">{blogs.body}</article>
                </div>
            }
            <p className="font-medium text-gray-500 hover:text-gray-700 my-8" onClick={handleClick}>Delete</p>
        </div>
    )
}
export default Details;