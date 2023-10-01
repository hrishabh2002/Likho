import {useState,useEffect} from "react"

export const useFetch=(url)=>{

    const[blogs,setBlog]=useState(null)
    const [loading,setLoading]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.status){
                throw Error('Couldn\'t connect to the server')
            }
            return res.json()
        })
        .then(data=>{
            setLoading(false)
            setBlog(data)
        })
        .catch(err=>{
            setLoading(false)
            setError(err.message)
            console.log(err.message);
        })

    },[url]);


    return(
       {blogs,loading,error}
    )
}
