import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { routerPath } from "./pathRouter";
import { ExampleTwo, ExamplesOne } from "../Examples";
import { About, Home } from "../pages";

const RouterGeneral = ({ children }) => {
	return (
		<Router>
			{children}
			<div style={{ height: "85vh" }}>
				<Routes>
					<Route path={routerPath.root} element={<Home />} />
					<Route path={routerPath.about} element={<About />} />
					<Route path={routerPath.exampleOne3FR} element={<ExamplesOne />} />
					<Route path={routerPath.exampleTwo3FR} element={<ExampleTwo />} />
				</Routes>
			</div>
		</Router>
	);
};

RouterGeneral.propTypes = {
	children: PropTypes.node.isRequired, // Validates that children is a React node
};

export default RouterGeneral;
