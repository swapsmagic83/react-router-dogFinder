import React from "react";
import DogDetail from "./DogDetail";
import DogList from "./DogList";
import { Routes, Route, Navigate } from "react-router-dom";

const RouteList = ({dogs}) =>{
    return (
       <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />}></Route>
        <Route path="/dogs/:name" element={<DogDetail dogs={dogs} />}></Route>
        <Route path='/*' element={<Navigate to='/dogs' />}></Route>
       </Routes>
    )
}
export default RouteList