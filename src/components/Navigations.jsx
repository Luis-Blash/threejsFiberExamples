import { Link } from "react-router-dom";
import { routerPath } from "../router/pathRouter";

import "../styles/Navigations.css";
import NavigationLession from "./NavigationLession";

const Navigations = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={routerPath.root}>Home</Link>
				</li>
				<li>
					<Link to={routerPath.about}>About</Link>
				</li>
			</ul>
			<div style={{ width: "100%", overflow: "hidden", display: "flex", flexGrow: "initial", gap: "16px" }}>
				<NavigationLession
					name="Mostrar lecciones iniciales"
					lessions={[
						{ name: "Scena sencilla, con animacion", route: routerPath.exampleOne3FR },
						{ name: "Orbit controller", route: routerPath.exampleTwo3FR },
						{ name: "Custom Object", route: routerPath.exampleTwo4FR },
					]}
				/>
				<NavigationLession name="Mostrar Drei" lessions={[{ name: "Transform Controls", route: routerPath.exampleDrei1 }]} />
				<NavigationLession name="HTML" lessions={[{ name: "HTML en canvas", route: routerPath.exampleHtml }]} />
			</div>
		</nav>
	);
};

export default Navigations;
