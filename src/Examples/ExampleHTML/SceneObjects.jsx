import { Html, MeshReflectorMaterial, PivotControls } from "@react-three/drei";
import { useRef } from "react";

const SceneObjects = () => {
	const cube = useRef();
	const sphere = useRef();

	return (
		<>
			<PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4} axisColors={["#9381ff", "#ff4d6d", "#7ae582"]} scale={100} fixed={true}>
				<mesh position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" />
					<Html>Esfera</Html>
				</mesh>
			</PivotControls>

			<mesh ref={sphere} position-x={2}>
				<sphereGeometry />
				<meshStandardMaterial color="#9381ff" />
			</mesh>

			<mesh ref={cube} position={[2, 2, 0]} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color="mediumpurple" />
			</mesh>

			<Html position={[0, 1, 0]} wrapperClass="label" center distanceFactor={8} occlude={[sphere, cube]}>
				Class
			</Html>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={1} mirror={0.5} color="gray" />
				{/* <meshStandardMaterial color="greenyellow" /> */}
			</mesh>
		</>
	);
};

export default SceneObjects;
