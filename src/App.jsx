import { useState } from "react";
import Form from "./Form";
import "./App.css" 

function App() {
  const [eleccion, setEleccion]=useState([]);
  const addDato = (dato) =>{
    setEleccion([...eleccion, dato])
  }
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (
    <div className='App'>
      <h1>Elige un color</h1>
      <form onAddDato={addDato}/>
    </div>
  );
}

export default App;
