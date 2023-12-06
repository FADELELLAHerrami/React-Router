








export async function fetchVans(){
    const response = await fetch("/api/vans");
    const json = await response.json();
    return json.vans;
}