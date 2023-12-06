import './server.js';
import { useParams,Link, useLoaderData } from 'react-router-dom';
import { fetchHostVans } from './fetchHostVan.js';
import { AuthRequired } from '../components/AuthRequired.js';






export async function loader({ params }){
    await AuthRequired();
    return fetchHostVans(params.id);
}



export default function VanDetails(){
    const params = useParams();
    console.log(params);
    const van = useLoaderData();
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