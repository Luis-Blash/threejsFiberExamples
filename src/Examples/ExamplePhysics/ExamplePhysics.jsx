import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import OrbitControllsThree from "./OrbitControllsThree";
import LightScene from "./LightScene";
import ScenePhysics from "./ScenePhysics";

const ExamplePhysics = () => {
	return (
		<>
			<p>
				Rapier es para fisicas{" "}
				<a href="https://rapier.rs/" target="_blank" rel="noopener noreferrer">
					Link
				</a>{" "}
				<a href="https://www.npmjs.com/package/@react-three/rapier" target="_blank" rel="noopener noreferrer">
					NPM
				</a>
			</p>
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
