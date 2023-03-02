import React ,{useState}from "react";
import Semaforo from "./semaforo.jsx";
import Logo from "./logo.jsx";
import Botones,{cambioDeBrillo,cambioDeColor} from "./botones.jsx"



//create your first component
const Home = () => {
	const [boolean, setBoolean] = useState(false)

	

	return (
		<div className="align-items-start">
			<Logo />
			<div className=" d-flex align-items--center">
			<Botones  nombre={cambioDeBrillo.nombre}/>
			<Botones handleClick={setBoolean}  state={boolean} nombre={cambioDeColor.nombre}/>
			</div>
			<div className="text-center">
				<Semaforo  state={boolean}/>
				<div>
				
				</div>
			</div>
			
		</div>
	);
};

export default Home;
