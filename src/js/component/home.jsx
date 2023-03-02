import React from "react";
import Semaforo from "./semaforo.jsx";
import Logo from "./logo.jsx";


//create your first component
const Home = () => {
	return (
		<div className="align-items-start">
			<Logo />
			<div className="text-center">
				<Semaforo />
			</div>
		</div>
	);
};

export default Home;
