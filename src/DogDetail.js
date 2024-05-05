import React from "react";
import { Link, useParams } from "react-router-dom";

const DogDetail= ({dogs}) =>{
    const param =useParams()
    const currentDog =dogs.find(dog => dog.name.toLowerCase()===param.name)
    if(!currentDog){
        return null
    }
    return (
        <>
        <h1>Name: {currentDog.name}</h1>
        <h2>Age: {currentDog.age}</h2>
        <p><h2>Facts:</h2> {currentDog.facts}</p>
        <img src={`/${currentDog.src}.jpg`} alt={currentDog.name} />
        </>
    )

}
export default DogDetail