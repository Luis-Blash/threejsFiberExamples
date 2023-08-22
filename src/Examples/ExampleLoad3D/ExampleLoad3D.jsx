import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import OrbitControllsThree from "./OrbitControllsThree";
import LightScene from "./LightScene";
import Models3D from "./Models3D";

const ExampleLoad3D = () => {
	return (
		<div style={{ height: "100%" }}>
			<Canvas
				shadows
				camera={{
					position: [0, 5, 10],
				}}
			>
				<Perf position="bottom-left" />
				<OrbitControllsThree />
				<Models3D />
				<LightScene />
			</Canvas>
		</div>
	);
};

export default ExampleLoad3D;
