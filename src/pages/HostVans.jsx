import { useEffect, useState } from "react"
import { Link } from "react-router-dom";






export default function HostVans() {
    const [vans,setVans] = useState([]);
    useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(json =>setVans(json.vans))
    },[])
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