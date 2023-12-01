import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"





export default function Photo(){
    const[price,setPrice] = useState("");
    const params =useParams();
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(json=> setPrice(json.vans.price))
    },[])
    return(
        <>
            {price?<h1>{price}$/day</h1>:<p>Loading ...</p>}
        </>
    )
}