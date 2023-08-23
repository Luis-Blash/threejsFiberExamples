import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { routerPath } from "./pathRouter";
import {
	ExampleDreiOne,
	ExampleHtml,
	ExampleLeva,
	ExampleLoad3D,
	ExampleMousePointer,
	ExamplePhysics,
	ExampleScene,
	ExampleThree,
	ExampleTwo,
	ExamplesOne,
} from "../Examples";
import { About, Home } from "../pages";

const RouterGeneral = ({ children }) => {
	return (
		<Router>
			{children}
			<div style={{ height: "100%" }}>
				<Routes>
					<Route path={routerPath.root} element={<Home />} />
					<Route path={routerPath.about} element={<About />} />
					<Route path={routerPath.exampleOne3FR} element={<ExamplesOne />} />
					<Route path={routerPath.exampleTwo3FR} element={<ExampleTwo />} />
					<Route path={routerPath.exampleTwo4FR} element={<ExampleThree />} />
					<Route path={routerPath.exampleDrei1} element={<ExampleDreiOne />} />
					<Route path={routerPath.exampleHtml} element={<ExampleHtml />} />
					<Route path={routerPath.exampleLeva} element={<ExampleLeva />} />
					<Route path={routerPath.exampleScene} element={<ExampleScene />} />
					<Route path={routerPath.exampleLoad3D} element={<ExampleLoad3D />} />
					<Route path={routerPath.exampleMousePointer} element={<ExampleMousePointer />} />
					<Route path={routerPath.examplePhysics} element={<ExamplePhysics />} />
				</Routes>
			</div>
		</Router>
	);
};

RouterGeneral.propTypes = {
	children: PropTypes.node.isRequired, // Validates that children is a React node
};

export default RouterGeneral;
