import { Canvas } from "@react-three/fiber";
import OrbitControllsThree from "./OrbitControllsThree";
import SceneObjects from "./SceneObjects";
import { Leva } from "leva";
import { Perf } from "r3f-perf";

const ExampleLeva = () => {
	return (
		<div style={{ height: "100%" }}>
			<div style={{ padding: "16px" }}>
				<p>
					Mas informacion en{" "}
					<a href="https://github.com/pmndrs/leva" target="_blank" rel="noopener noreferrer">
						leva
					</a>
				</p>
				<p>
					Mas informacion en{" "}
					<a href="https://github.com/utsuboco/r3f-perf" target="_blank" rel="noopener noreferrer">
						Performance
					</a>
				</p>
			</div>
			<Leva collapsed />
			<Canvas>
				<Perf position="bottom-left" />
				<OrbitControllsThree />
				<SceneObjects />

				<directionalLight position={[1, 2, 3]} intensity={1.5} />
				<ambientLight intensity={0.5} />
			</Canvas>
		</div>
	);
};

export default ExampleLeva;
