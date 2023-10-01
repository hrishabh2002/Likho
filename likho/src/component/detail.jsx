import { useParams } from "react-router-dom";
import { useFetch } from "./usefetch";
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
        }).catch(()=>{
            console.log("some error occured");
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
                    <h1 className="font-semibold">{blogs[0].title}</h1>
                    <p className="text-gray-500">-{blogs[0].author}</p>
                    <article className="my-6">{blogs[0].body}</article>
                </div>
            }
            <p className="font-medium text-gray-500 hover:text-gray-700 my-8" onClick={handleClick}>Delete</p>
        </div>
    )
}
export default Details;