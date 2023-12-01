import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"





export default function Photo(){
    const[description,setDescription] = useState("");
    const params =useParams();
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(json=> setDescription(json.vans.description))
    },[])
    return(
        <>
            {description ? <p>{description}$/day</p> : <p>loading ...</p>}
        </>
    )
}