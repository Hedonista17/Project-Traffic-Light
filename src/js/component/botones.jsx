import React from "react";

export let cambioDeBrillo = {
    nombre: "Cambiar Brillo"
}
export let cambioDeColor ={
	nombre:"Añadir Color"
}
const Botones = (props) =>{

    return (
        <div className="mx-5 my-1 ">
      <button onClick={()=>props.handleClick (!props.state )} type="button" className="btn btn-dark mx-3 btn-lg">{props.nombre}</button>
      </div>
    
    );
};










export default Botones