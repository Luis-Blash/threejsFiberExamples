const Objects = () => {
	return (
		<>
			<mesh>
				<sphereGeometry />
				<meshStandardMaterial color="#9381ff" />
			</mesh>
			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
};

export default Objects;
