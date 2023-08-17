import { Canvas } from "@react-three/fiber";
import SceneObjects from "./SceneObjects";

const ExamplesOne = () => {
	return (
		<div style={{ height: "100%" }}>
			<Canvas>
				<SceneObjects />
			</Canvas>
		</div>
	);
};

export default ExamplesOne;
