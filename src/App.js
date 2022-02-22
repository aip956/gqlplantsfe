import { useMutation, useQuery } from '@apollo/client';
import { CREATE_PLANT, DELETE_PLANT, UPDATE_PLANT } from './GraphQL/Mutation';
import { getAll } from "./GraphQL/Query";
import { useState } from "react";
import './App.css';

function App() {
  const{loading, error, data, refetch}=useQuery(getAll);
  const [createPlant,{err}]=useMutation(CREATE_PLANT);
  const [deletePlant,{errs}]=useMutation(DELETE_PLANT);
  const [updatePlant,{errors}]=useMutation(UPDATE_PLANT);

  const [name,setName] = useState(null)
  const [type,setType] = useState(null)  
  const [image,setImage] = useState(null) 
  if(loading) return "Loading";
  if(error) return "Error";
  if(data) console.log(data);

  const addPlant=()=>{
    createPlant({
      variables:{
        name: name,
        type: type,
        image: image,
      },
    });
  };

const removePlant=(id) => {
  deletePlant({
    variables:{
      id: id,
    },
  });
};

const changePlant=(id) => {
  updatePlant({
    variables:{
      name: name,
      type: type,
      image: image,
    },
  });
};



  return (
    <div className="App">
      <h1>My Excellent Plant App</h1>
      {data.getAll.map((data) => (
      <>
          <p key={data.name}>
            {data.name}:{data.type}
           <br/>
            <img src={data.image} alt={data.name} />
          
          </p>
          <button onClick={()=>{changePlant(data.id);refetch() }}>Update Plant</button>
          <button onClick={()=>{removePlant(data.id);refetch() }}>Delete Plant</button>
      </>  
        ))}
  <br/>
Name: <input onChange={(e)=>setName(e.target.value)}/>
Type: <input onChange={(e)=>setType(e.target.value)}/>
Image: <input onChange={(e)=>setImage(e.target.value)}/>
 <button onClick={() => {addPlant();
 refetch();
 }}
 >
   Add Plant</button>
    </div>
  );
}

export default App;
