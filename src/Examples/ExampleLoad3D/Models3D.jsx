import { Suspense } from "react";
import ModeOne from "./ModeOne";
import Placeholder from "./PlaceHolder";

const Models3D = () => {
	return (
		<>
			<mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>

			<Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
				<ModeOne />
			</Suspense>
		</>
	);
};

export default Models3D;
