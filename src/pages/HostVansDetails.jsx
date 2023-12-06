import './server.js';
import { useParams, Link, Outlet, useLoaderData } from 'react-router-dom';
import { fetchHostVans } from './fetchHostVan.js';
import { AuthRequired } from '../components/AuthRequired.js';

export async function loader({ params }){
    await AuthRequired();
    return fetchHostVans(params.id);
}

export default function HostVanDetails(){
    const params = useParams();
    console.log(params);
    const van = useLoaderData();
    return(
        <>
            <Link to="../me" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>
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
                <div className='host-van-single-part2'>
                        <nav>
                            <Link to=".">details</Link>
                            <Link to="price">price</Link>
                            <Link to="photo">photo</Link>
                        </nav>
                        <Outlet />
                        </div>
            </div>
        </>
    )
}