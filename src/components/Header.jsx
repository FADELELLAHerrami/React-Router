import { NavLink } from "react-router-dom"


export default function Header(){
    return(
        <header>
                <NavLink to="/">#VANLIFE</NavLink>
            <nav>
                <NavLink to="about" className={({ isActive }) => isActive ? "red" : null}>About</NavLink>
                <NavLink to="host" className={({ isActive }) => isActive ? "red" : null}>Host</NavLink>
                <NavLink to="Vins" className={({ isActive }) => isActive ? "red" : null}>Vins</NavLink>
            </nav>
        </header>
    )
}