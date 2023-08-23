import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import OrbitControllsThree from "./OrbitControllsThree";
import LightScene from "./LightScene";
import ScenePhysics from "./ScenePhysics";

const ExamplePhysics = () => {
	return (
		<>
			<div style={{ height: "100%" }}>
				<Canvas
					camera={{
						position: [0, 5, 10],
					}}
				>
					<Perf position="bottom-left" />
					<OrbitControllsThree />
					<ScenePhysics />
					<LightScene />
				</Canvas>
			</div>
		</>
	);
};

export default ExamplePhysics;
