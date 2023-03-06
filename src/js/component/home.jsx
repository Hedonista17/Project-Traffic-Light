import React ,{useState,useEffect}from "react";
import Semaforo  from "./semaforo.jsx";
import Logo from "./logo.jsx";
import Botones,{cambioDeBrillo,cambioDeColor} from "./botones.jsx"


const initialState = {
    rojo:"",
    amarillo:"",
    verde:"",
    morado:"",
}


//create your first component
const Home = () => {
	const [boolean, setBoolean] = useState(false)
	const [cambioColor, setCambioColor] = useState(initialState);
    
    useEffect(() => {
       setCambioColor({ ...initialState,rojo:"brillito"})  
      },[]);


	function cambioDeLuz() {
		if(cambioColor.rojo == "brillito"){
		 setCambioColor({...initialState,amarillo:"brillito"})
		} else if(cambioColor.amarillo == "brillito"){
			setCambioColor({...initialState,verde:"brillito"})
		} else {
			boolean && cambioColor.morado == "" ? setCambioColor({...initialState,morado:"brillito"}) :  setCambioColor({ ...initialState,rojo:"brillito"})  
			}
	  }
	

	return (
		<div className="align-items-start">
			<Logo />
			<div  id="botones">
			<button className="btn btn-dark mx-3 btn-lg" onClick={cambioDeLuz} >{cambioDeBrillo.nombre}</button>
			<Botones handleClick={setBoolean}  state={boolean} nombre={cambioDeColor.nombre}/>
			</div>
			<div className="text-center">
				<Semaforo cambioColor={cambioColor} setCambioColor={setCambioColor} initialState= {initialState}state={boolean}/>
				<div>
				
				</div>
			</div>
			
		</div>
	);
};

export default Home;
