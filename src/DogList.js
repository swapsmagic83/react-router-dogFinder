import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) =>{
   
    return (
        <div>
        {dogs.map(dog =>(
           <div>
            <h1><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h1>
            <img src={`/${dog.src}.jpg`}  />
            
            </div>
        ))}
        </div>
    )
}
export default DogList