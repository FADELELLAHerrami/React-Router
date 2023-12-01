import { useEffect, useState } from 'react';
import './server.js';
import { useParams } from 'react-router-dom';



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
                {van ? (
                    <div className="host-van-single">
                            <img src={van.imageUrl} /> 
                        <div>
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            <h2>{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                        </div>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </>
    )
}