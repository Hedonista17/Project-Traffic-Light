import React, { useState } from "react";


const Semaforo = () => {

    const [cambioColor, setCambioColor] = useState("rojo");

    return (
        <div >
            <div className="container">
                <div className="cable mt-5"></div>
                <div className="palo"></div>
                <div className="semaforo">
                    <div  onClick={()=>setCambioColor("rojo")} className={"luces-circulo rojo"+(cambioColor === "rojo" ? " brillito" :"") } color="rojo" ></div>
                    <div onClick={()=>setCambioColor("amarillo")} className={"luces-circulo amarillo"+(cambioColor === "amarillo" ? " brillito" :"")}color="amarillo"></div>
                    <div onClick={()=>setCambioColor("verde")} className={"luces-circulo verde"+(cambioColor === "verde" ? " brillito" :"") } color="verde"></div>
                </div>
            </div>
        </div>
    )
}




export default Semaforo;