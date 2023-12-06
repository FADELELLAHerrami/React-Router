import { NavLink } from "react-router-dom";
import  LoginIcon from '../assets/images/avatar-icon.png';


export default function Header(){
    return(
        <header>
                <NavLink to="/">#VANLIFE</NavLink>
            <nav>
                <NavLink to="about" className={({ isActive }) => isActive ? "red" : null}>About</NavLink>
                <NavLink to="host" className={({ isActive }) => isActive ? "red" : null}>Host</NavLink>
                <NavLink to="Vins" className={({ isActive }) => isActive ? "red" : null}>Vins</NavLink>
                <NavLink to="login" className="login-NavLink">
                    <img 
                        src= {LoginIcon}
                        className="login-icon"
                    />
                </NavLink>
            </nav>
        </header>
    )
}