import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import LightScene from "./LightScene";
import OrbitControllsThree from "./OrbitControllsThree";
import Objects from "./Objects";

const ExampleMousePointer = () => {
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
					<Objects />
					<LightScene />
				</Canvas>
			</div>
		</>
	);
};

export default ExampleMousePointer;
