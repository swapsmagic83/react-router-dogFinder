import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';
import RouteList from './RouteList';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [dogs,setDogs] = useState({data:null,loading:true})

  useEffect(()=>{
    async function getAllDogs(){
      const res = await axios.get("http://localhost:5001/dogs")
      console.log(res.data)
      setDogs({data:res.data,loading:false})
    }
    getAllDogs()
    
  },[])

  if (dogs.loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="App">
      <h1>Good luck!</h1>
    <BrowserRouter>
      <NavBar dogs={dogs.data}></NavBar>
      <div className="container">
          <RouteList dogs={dogs.data} />
      </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
