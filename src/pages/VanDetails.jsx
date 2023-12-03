import { useEffect, useState } from 'react';
import './server.js';
import { useParams,Link } from 'react-router-dom';



export default function VanDetails(){
    const [van,setVan] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=> res.json())
        .then(json => setVan(json.vans))
    },[params.id])
    return(
        <>
             <div className="van-detail-container">
             <Link to=".." className="back-button" state={{search: params.toString()}}>
                &larr; <span>Back to all vans</span>
            </Link>
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </>
    )
}