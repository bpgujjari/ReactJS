import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Link,NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { useAuth } from "./auth";
import Login from "./Login";

const Nav=()=>{

    
const {user,logout}=useAuth();

    
    return(<>
        <nav>
           <NavLink to={"/"}>Home</NavLink> 
           <NavLink to={"/register"}>Register</NavLink>
           <NavLink to={"/contact"}>Contact</NavLink> 
           <NavLink to={"/about"}>About</NavLink> 
           <NavLink to={"/projects"}>Projects</NavLink>
           <NavLink to={"/users"}>Users</NavLink>

            {user ? <NavLink to={"/logout"}>Logout</NavLink> : <NavLink to={"/login"}>Login</NavLink>}
                       
           </nav>
    </>)
}
export default Nav;