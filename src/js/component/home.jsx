import React ,{useState}from "react";
import Semaforo, { initialState} from "./semaforo.jsx";
import Logo from "./logo.jsx";
import Botones,{cambioDeBrillo,cambioDeColor} from "./botones.jsx"



//create your first component
const Home = () => {
	const [boolean, setBoolean] = useState(false)
    const [cambioBrillo, setCambioBrillo] = useState(initialState);
	

	return (
		<div className="align-items-start">
			<Logo />
			<div  id="botones">
			<button className="btn btn-dark mx-3 btn-lg" value= {cambioBrillo}onClick={setCambioBrillo} >{cambioDeBrillo.nombre}</button>
			<Botones handleClick={setBoolean}  state={boolean} nombre={cambioDeColor.nombre}/>
			</div>
			<div className="text-center">
				<Semaforo state={boolean}/>
				<div>
				
				</div>
			</div>
			
		</div>
	);
};

export default Home;
