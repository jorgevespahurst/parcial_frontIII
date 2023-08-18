import { useState } from "react";

function Form({onAddDato}) {
    const[nombre,setNombre]=useState("");
    const[color,setColor]=useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && color) {
        onAddDato({nombre,color})
        setNombre("");
        setColor("");
    }
};

return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="text" placeholder="Ingresa tu color favorito (formato HEX)" value={color} onChange={(e)=>setColor(e.target.value)} />
        <button type="submit">Enviar</button>
    </form>
)
}

export default Form;
