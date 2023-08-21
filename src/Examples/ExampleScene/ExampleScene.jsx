import { Canvas } from "@react-three/fiber";
import OrbitControllsThree from "./OrbitControllsThree";
import Objects from "./Objects";
import LightScene from "./LightScene";
import { Perf } from "r3f-perf";

const ExampleScene = () => {
	// const created = ({ gl }) => {
	// 	gl.setClearColor("#ff0000", 1);
	// };
	const created = ({ scene }) => {
		console.log(scene);
		// scene.background = new Color("#ff0000");
	};
	return (
		<div id="scene-lession" style={{ height: "100%" }}>
			<Canvas
				shadows
				camera={{
					fov: 45,
					near: 0.1,
					far: 50,
					position: [-4, 3, 6],
				}}
				onCreated={created}
			>
				<Perf position="bottom-left" />
				<OrbitControllsThree />
				<Objects />
				<LightScene />
			</Canvas>
		</div>
	);
};

export default ExampleScene;
