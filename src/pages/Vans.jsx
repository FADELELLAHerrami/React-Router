import { Link, useLoaderData, useSearchParams  } from "react-router-dom";
import './server.js';
import { fetchVans } from "./FetchVans.js";
import { AuthRequired } from "../components/AuthRequired.js";





export async function loader(){
    await AuthRequired();
    return fetchVans();
}




export default function Vans() {
    // const [vans, setVans] = React.useState([]);
    

    // React.useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true);
    //         try{
    //             const data = await fetchVans();
    //             setVans(data);
    //         }catch(error){
    //             setError(error)
    //         }finally{
    //             setLoading(false);
    //         }
    //     }
        
    //     loadVans()
    // }, [])
    // useLoaderData
    const vans = useLoaderData();
    //serchParams
    const[searchParams,setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type');
    //filter vans basedd on type
    const filterVans =  typeFilter
    ? vans.filter(van=>van.type.toLowerCase() === typeFilter)
    :vans;

    const vanElements = filterVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`} state={{type: typeFilter}}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <nav className="host-van-single-part3">
                <Link to=".">All</Link>
                <Link to="?type=simple">simple</Link>
                <Link to="?type=rugged">rugged</Link>
                <Link to="?type=luxury">luxury</Link>
            </nav>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}