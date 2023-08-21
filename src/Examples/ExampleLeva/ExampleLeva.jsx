import { Canvas } from "@react-three/fiber";
import OrbitControllsThree from "./OrbitControllsThree";
import SceneObjects from "./SceneObjects";

const ExampleLeva = () => {
	return (
		<div style={{ height: "100%" }}>
			<div style={{ padding: "16px" }}>
				<span>
					Mas informacion en{" "}
					<a href="https://github.com/pmndrs/leva" target="_blank" rel="noopener noreferrer">
						leva
					</a>
				</span>
			</div>
			<Canvas>
				<OrbitControllsThree />
				<SceneObjects />

				<directionalLight position={[1, 2, 3]} intensity={1.5} />
				<ambientLight intensity={0.5} />
			</Canvas>
		</div>
	);
};

export default ExampleLeva;
