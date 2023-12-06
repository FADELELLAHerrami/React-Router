import { Link, useLoaderData } from "react-router-dom";
import { fetchHostVans } from "./fetchHostVan";
import { AuthRequired } from "../components/AuthRequired";


export async function loader(){
    await AuthRequired();
    return fetchHostVans();
}


export default function HostVans() {
    const vans = useLoaderData();
    return(
        <>
            <h1>hello</h1>
            <div className="host-vans-list">
                <section>
                    {vans.map((van) => (
                        <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
                            <div className="host-van-single">
                                <img src={van.imageUrl}></img>
                                <div className="host-van-info">
                                    <h2>{van.name}</h2>
                                    <p>{van.price}$/day</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </>
    )
}