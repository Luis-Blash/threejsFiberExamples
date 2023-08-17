import { useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// extend({ OrbitControls: OrbitControls })
extend({ OrbitControls });

const OrbitControllsThree = () => {
	const { camera, gl } = useThree();
	return (
		<>
			<orbitControls args={[camera, gl.domElement]} />
		</>
	);
};

export default OrbitControllsThree;
