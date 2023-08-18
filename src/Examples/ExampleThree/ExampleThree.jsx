import { Canvas } from "@react-three/fiber";
import OrbitControllsThree from "./OrbitControllsThree";
import CustomObject from "./CustomObject";
import SceneObjects from "./SceneObjects";
import { ACESFilmicToneMapping, CineonToneMapping, LinearSRGBColorSpace } from "three";

const cameraSettings = {
	fov: 45,
	near: 0.1,
	far: 200,
	position: [3, 2, 6],
};

const ExampleThree = () => {
	return (
		<div style={{ height: "100%" }}>
			<Canvas
				dpr={[1, 2]}
				gl={{
					antialias: true,
					toneMapping: ACESFilmicToneMapping,
					outputColorSpace: LinearSRGBColorSpace,
				}}
				camera={cameraSettings}
			>
				<OrbitControllsThree />
				<CustomObject />
				<SceneObjects />
				{/* luz */}
				<directionalLight position={[1, 2, 3]} intensity={1.5} />
				<ambientLight intensity={0.5} />
			</Canvas>
		</div>
	);
};

export default ExampleThree;
