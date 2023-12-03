import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"





export default function Photo(){
    const[photo,setPhoto] = useState("");
    const params =useParams();
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(json=> setPhoto(json.vans.imageUrl))
    },[])
    return(
        <>
            {photo?<img className="photo" src={photo} />:<p>loading ...</p> }
        </>
    )
}