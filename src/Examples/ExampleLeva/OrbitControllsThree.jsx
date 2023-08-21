import { OrbitControls } from "@react-three/drei";

const OrbitControllsThree = () => {
	return (
		<>
			<OrbitControls makeDefault enableDamping={false} />
		</>
	);
};

export default OrbitControllsThree;
