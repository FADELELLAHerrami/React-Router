
import { Outlet } from "react-router-dom";
import Header from "./Header";



export default function Layout(){
    return(
        <>
            <h1>This is the layout component</h1>
            <Header />
            <Outlet />
        </>
    )
}