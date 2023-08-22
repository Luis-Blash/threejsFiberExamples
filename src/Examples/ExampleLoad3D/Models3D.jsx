import { Suspense } from "react";
import ModeOne from "./ModeOne";
import Placeholder from "./PlaceHolder";
import ModelDrei from "./ModelDrei";
import FoxModel from "./FoxModel";

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

			<Suspense fallback={<Placeholder position={[-2.5, 0, 2.5]} scale={[2, 3, 2]} />}>
				<FoxModel scale={0.02} position={[-2.5, 0, 2.5]} rotation-y={0.3} />
			</Suspense>
		</>
	);
};

export default Models3D;
