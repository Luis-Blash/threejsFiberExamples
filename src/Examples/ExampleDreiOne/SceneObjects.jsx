import { PivotControls, TransformControls } from "@react-three/drei";
import { useRef } from "react";

const SceneObjects = () => {
	const cube = useRef();

	return (
		<>
			<PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4} axisColors={["#9381ff", "#ff4d6d", "#7ae582"]} scale={100} fixed={true}>
				<mesh position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" />
				</mesh>
			</PivotControls>

			<mesh ref={cube} position={[5, 1, -5]} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh>
			<TransformControls object={cube} />

			<TransformControls position-x={5}>
				<mesh scale={1.5}>
					<boxGeometry />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>
			</TransformControls>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
};

export default SceneObjects;
