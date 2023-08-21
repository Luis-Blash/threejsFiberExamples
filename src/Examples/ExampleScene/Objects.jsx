// import { BakeShadows, SoftShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Objects = () => {
	const cubeRef = useRef();
	//* animate objects
	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});
	return (
		<>
			{/* <BakeShadows /> */}
			{/* <SoftShadows frustum={3.75} size={50} near={9.5} samples={17} rings={11} /> */}
			<mesh ref={cubeRef} castShadow>
				<boxGeometry />
				<meshStandardMaterial color="#9381ff" />
			</mesh>
			<mesh castShadow position={[-2, 0, 0]}>
				<boxGeometry />
				<meshStandardMaterial color="#ff81ff" />
			</mesh>
			<mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
};

export default Objects;
