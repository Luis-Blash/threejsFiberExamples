import * as THREE from "three";
import { useRef } from "react";
import { RandomizedLight, useHelper } from "@react-three/drei";

const LightScene = () => {
	const directionalLight = useRef();
	useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
	return (
		<>
			<RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]} bias={0.001} />
			{/* <AccumulativeShadows position={[0, -0.99, 0]} scale={10} color="#316d39" opacity={0.8} frames={1000}>
				<RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]} bias={0.001} />
			</AccumulativeShadows> */}
			{/* <AccumulativeShadows position={[0, -0.99, 0]} scale={10}>
				<RandomizedLight position={[1, 2, 3]} />
			</AccumulativeShadows> */}
			{/* <AccumulativeShadows position={[0, -0.99, 0]} scale={10}>
				<directionalLight position={[1, 2, 3]} castShadow />
			</AccumulativeShadows> */}
			{/* <directionalLight
				ref={directionalLight}
				position={[1, 2, 3]}
				intensity={1.5}
				castShadow
				shadow-mapSize={[1024, 1024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-top={5}
				shadow-camera-right={5}
				shadow-camera-bottom={-5}
				shadow-camera-left={-5}
			/> */}
			<ambientLight intensity={0.5} />
		</>
	);
};

export default LightScene;
