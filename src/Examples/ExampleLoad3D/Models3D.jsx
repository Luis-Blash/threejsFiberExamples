import { Suspense } from "react";
import ModeOne from "./ModeOne";
import Placeholder from "./PlaceHolder";
import ModelDrei from "./ModelDrei";

const Models3D = () => {
	return (
		<>
			<mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={30}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>

			<Suspense fallback={<Placeholder position={[8, -1, 0]} scale={[2, 3, 2]} />}>
				<ModeOne />
			</Suspense>

			<Suspense fallback={<Placeholder position={[-8, -1, 0]} scale={[2, 3, 2]} />}>
				<ModelDrei position={[-8, -1, 0]} scale={0.35} />
			</Suspense>
		</>
	);
};

export default Models3D;
