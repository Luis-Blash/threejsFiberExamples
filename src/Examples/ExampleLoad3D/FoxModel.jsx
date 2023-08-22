import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

const FoxModel = ({ ...props }) => {
	const fox = useGLTF("../../../public/Fox/glTF/Fox.gltf");
	const animations = useAnimations(fox.animations, fox.scene);

	const { animationName } = useControls({
		animationName: { options: animations.names },
	});

	// useEffect(() => {
	// 	animations.actions.Run.play();

	// 	window.setTimeout(() => {
	// 		animations.actions.Walk.play();
	// 		animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
	// 	}, 2000);
	// }, []);

	useEffect(() => {
		const action = animations.actions[animationName];
		action.reset().fadeIn(0.5).play();
		return () => {
			action.fadeOut(0.5);
		};
	}, [animationName]);

	return (
		<>
			<primitive object={fox.scene} {...props} />
		</>
	);
};
export default FoxModel;
