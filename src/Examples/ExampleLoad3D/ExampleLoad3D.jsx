import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import OrbitControllsThree from "./OrbitControllsThree";
import LightScene from "./LightScene";
import Models3D from "./Models3D";

const ExampleLoad3D = () => {
	return (
		<div style={{ height: "100%" }}>
			<Canvas>
				<Perf position="bottom-left" />
				<OrbitControllsThree />
				<Models3D />
				<LightScene />

				<directionalLight position={[1, 2, 3]} intensity={1.5} />
				<ambientLight intensity={0.5} />
			</Canvas>
		</div>
	);
};

export default ExampleLoad3D;
