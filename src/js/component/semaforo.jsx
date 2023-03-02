import React, { useState,useEffect } from "react";


const initialState = {
    rojo:"",
    amarillo:"",
    verde:"",
    morado:"",
}

const Semaforo = (props) => {
    
    const [cambioColor, setCambioColor] = useState(initialState);
     //random useEffect
    useEffect(() => {
       setCambioColor({ rojo:"brillito"})  
      },[]);


     

    

    return (
        <div >
            <div className="container">
                <div className="cable mt-5"></div>
                <div className="palo"></div>
                <div className="semaforo">
                    <div onClick={()=>setCambioColor({...initialState, rojo:"brillito"})} className={`luces-circulo rojo ${cambioColor.rojo}`} color="rojo" ></div>
                    <div onClick={()=>setCambioColor({...initialState, amarillo:"brillito"})} className={`luces-circulo amarillo ${cambioColor.amarillo}`}color="amarillo"></div>
                    <div onClick={()=>setCambioColor({...initialState, verde:"brillito"})} className={`luces-circulo verde ${cambioColor.verde}`} color="verde"></div>
                    {props.state ?  <div onClick={()=>setCambioColor({...initialState, morado:"brillito"})} className={`luces-circulo morado ${cambioColor.morado}`} color="morado" ></div> : null}
                </div>
            </div>
        </div>
    )
}




export default Semaforo;