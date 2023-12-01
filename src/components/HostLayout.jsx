import { NavLink, Outlet } from "react-router-dom";





export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
            <nav className="host-nav">
                <NavLink to="/host/" end className={({ isActive }) => isActive ? "blue" : ""}>Dashboard</NavLink>
                <NavLink to="income" className={({ isActive }) => isActive ? "blue" : ""}>Income</NavLink>
                <NavLink to="me" className={({ isActive }) => isActive ? "blue" : ""}>Vans</NavLink>
                <NavLink to="hostReview" className={({ isActive }) => isActive ? "blue" : ""}>Reviews</NavLink>
            </nav>

            </nav>
            <Outlet />
        </>
    )
}
