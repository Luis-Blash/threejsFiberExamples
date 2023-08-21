import { useLoader } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModeOne = () => {
	// const model = useLoader(GLTFLoader, "../../../public/hamburger.glb");
	// console.log(model.scene);

	// const model = useLoader(GLTFLoader, "./../../public/hamburger-draco.glb", (loader) => {
	// 	const dracoLoader = new DRACOLoader();
	// 	dracoLoader.setDecoderPath("./../../public/draco/");
	// 	loader.setDRACOLoader(dracoLoader);
	// });

	const model = useLoader(GLTFLoader, "./../../public/FlightHelmet/glTF/FlightHelmet.gltf", (loader) => {
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath("./../../public/draco/");
		loader.setDRACOLoader(dracoLoader);
	});
	return (
		<>
			<primitive object={model.scene} scale={5} position-y={-1} />
			{/* hambuergesa */}
			{/* <primitive object={model.scene} scale={0.35} /> */}
			{/* casco */}
		</>
	);
};

export default ModeOne;
