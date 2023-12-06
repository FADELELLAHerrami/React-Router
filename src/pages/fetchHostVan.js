








export async function fetchHostVans(id){
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const response = await fetch(url);
    const json = await response.json();
    return json.vans;
}



