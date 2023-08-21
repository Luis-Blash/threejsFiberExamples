import { button, useControls } from "leva";

const SceneObjects = () => {
	const { position, color, visible } = useControls("sphere", {
		position: {
			value: { x: -2, y: 0 },
			step: 0.01,
			joystick: "invertY",
		},
		color: "orange",
		visible: true,
	});

	// const { position, color, visible } = useControls({
	// 	//? normal
	// 	// position: {
	// 	// 	value: -2,
	// 	// 	min: -4,
	// 	// 	max: 4,
	// 	// 	step: 0.01,
	// 	// },
	// 	//? varios
	// 	position: {
	// 		value: { x: -2, y: 0 },
	// 		step: 0.01,
	// 		joystick: "invertY",
	// 	},
	// 	color: "#ff0000",
	// 	visible: true,
	// 	//? mis variables
	// 	myInterval: {
	// 		min: 0,
	// 		max: 10,
	// 		value: [4, 5],
	// 	},
	// 	clickMe: button(() => {
	// 		console.log("ok");
	// 	}),
	// 	choice: { options: ["a", "b", "c"] },
	// });

	return (
		<>
			<mesh visible={visible} position={[position.x, position.y, 0]}>
				<sphereGeometry />
				<meshStandardMaterial color={color} />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
};

export default SceneObjects;
