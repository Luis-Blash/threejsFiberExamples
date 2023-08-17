import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SceneObjects = () => {
	const cubeRef = useRef();
	const groupRef = useRef();
	//* animate objects
	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
		groupRef.current.rotation.y += delta;
	});

	return (
		<>
			<group ref={groupRef}>
				<mesh position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" />
				</mesh>

				<mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
					<boxGeometry />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>
			</group>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
};

export default SceneObjects;
