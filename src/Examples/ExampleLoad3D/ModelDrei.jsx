import { useGLTF } from "@react-three/drei";

const ModelDrei = ({ ...props }) => {
	// const model = useGLTF("../../../public/hamburger.glb");
	const model = useGLTF("../../../public/hamburger-draco.glb");
	return (
		<>
			<primitive object={model.scene} {...props} />
		</>
	);
};

useGLTF.preload("../../../public/hamburger-draco.glb");

export default ModelDrei;
