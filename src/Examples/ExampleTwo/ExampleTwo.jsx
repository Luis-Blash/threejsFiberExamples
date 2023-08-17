import { Canvas } from "@react-three/fiber";
import OrbitControllsThree from "./OrbitControllsThree";
import SceneObjects from "./SceneObjects";

const ExampleTwo = () => {
	return (
		<div style={{ height: "100%" }}>
			<Canvas>
				<OrbitControllsThree />
				<SceneObjects />
				{/* luz */}
				<directionalLight position={[1, 2, 3]} intensity={1.5} />
				<ambientLight intensity={0.5} />
			</Canvas>
		</div>
	);
};

export default ExampleTwo;
