const LightScene = () => {
	return (
		<>
			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
		</>
	);
};

export default LightScene;
