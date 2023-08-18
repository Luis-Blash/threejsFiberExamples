import { Link } from "react-router-dom";
import { routerPath } from "../router/pathRouter";

import "../styles/Navigations.css";

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
			<ul>
				<li>
					<Link to={routerPath.exampleOne3FR}>Scena sencilla, con animacion</Link>
				</li>
				<li>
					<Link to={routerPath.exampleTwo3FR}>Orbit controller</Link>
				</li>
				<li>
					<Link to={routerPath.exampleTwo4FR}>Custom Object</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigations;
