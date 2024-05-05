import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar({dogs}){
    const links = dogs.map(dog =>{
        return <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}> {dog.name} </NavLink>
    })
    return (
        <nav className="NavBar">
           <NavLink to="/dogs">Home</NavLink>
           {links}
        </nav>
    )
}
export default NavBar