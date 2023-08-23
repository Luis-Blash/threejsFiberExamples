import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

const ScenePhysics = () => {
	return (
		<>
			<Physics debug>
				<RigidBody colliders="ball">
					<mesh castShadow position={[-2, 2, 0]}>
						<sphereGeometry />
						<meshStandardMaterial color="orange" />
					</mesh>
				</RigidBody>

				<RigidBody>
					<mesh castShadow position={[2, 2, 4]}>
						<boxGeometry args={[3, 2, 1]} />
						<meshStandardMaterial color="mediumpurple" />
					</mesh>
					<mesh castShadow position={[2, 2, 5]}>
						<boxGeometry args={[1, 1, 1]} />
						<meshStandardMaterial color="mediumpurple" />
					</mesh>
				</RigidBody>

				<RigidBody>
					<mesh castShadow position={[2, 2, -1]}>
						<boxGeometry args={[3, 2, 1]} />
						<meshStandardMaterial color="mediumpurple" />
					</mesh>
					<mesh castShadow position={[2, 2, 2]}>
						<boxGeometry args={[1, 1, 1]} />
						<meshStandardMaterial color="mediumpurple" />
					</mesh>
				</RigidBody>

				<RigidBody colliders={false} position={[-5, 1, -0.25]} rotation={[Math.PI * 0.1, 0, 0]}>
					<CuboidCollider args={[1.5, 1.5, 0.5]} />
					<CuboidCollider args={[0.25, 1, 0.25]} position={[0, 0, 1]} rotation={[-Math.PI * 0.35, 0, 0]} />
					{/* mesh */}
				</RigidBody>

				<RigidBody type="fixed">
					<mesh receiveShadow position-y={-1.25}>
						<boxGeometry args={[20, 0.5, 10]} />
						<meshStandardMaterial color="greenyellow" />
					</mesh>
				</RigidBody>
			</Physics>
		</>
	);
};

export default ScenePhysics;
