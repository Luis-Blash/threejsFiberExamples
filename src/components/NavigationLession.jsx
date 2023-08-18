// NavigationLession.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavigationsLession.css"; // Importa los estilos CSS

const NavigationLession = ({ name = "", lessions = [{ name: "", route: "" }] }) => {
	const [showChildren, setShowChildren] = useState(false);

	const toggleChildren = () => {
		setShowChildren(!showChildren);
	};

	return (
		<div>
			<div className="toggle-container" onClick={toggleChildren}>
				{name}
			</div>
			<div className={`child-container ${showChildren ? "show-children" : ""}`}>
				{lessions.map((lession, index) => (
					<div key={`${index}-lession`}>
						<Link to={lession.route}>{lession.name}</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default NavigationLession;
