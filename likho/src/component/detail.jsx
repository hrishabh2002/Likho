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
                    <h1>{blogs.title}</h1>
                    <p>{blogs.author}</p>
                    <article>{blogs.body}</article>
                </div>
            }
            <Button onClick={handleClick}>Delete</Button>
        </div>
    )
}
export default Details;