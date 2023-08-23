import { meshBounds } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Objects = () => {
	const cube = useRef();
	useFrame((state, delta) => {
		cube.current.rotation.y += delta;
	});

	const eventHandler = (event) => {
		console.clear();
		console.log(event);
		console.log("---");
		console.log("distance", event.distance); // Distancia entre la cámara y el punto de impacto
		console.log("point", event.point); // Coordenadas del punto de impacto (en 3D)
		console.log("uv", event.uv); // Coordenadas UV en la geometría (en 2D)
		console.log("object", event.object); // El objeto que desencadenó el evento
		console.log("eventObject", event.eventObject); // El objeto que estaba escuchando el evento (útil donde hay objetos dentro de objetos)

		console.log("---");
		console.log("x", event.x); // Coordenadas de pantalla 2D del puntero
		console.log("y", event.y); // Coordenadas de pantalla 2D del puntero

		console.log("---");
		console.log("shiftKey", event.shiftKey); // Si se presionó la tecla SHIFT
		console.log("ctrlKey", event.ctrlKey); // Si se presionó la tecla CTRL
		console.log("metaKey", event.metaKey); // Si se presionó la tecla COMMAND

		cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
	};

	return (
		<>
			<mesh
				ref={cube}
				raycast={meshBounds}
				castShadow
				onClick={eventHandler}
				onPointerEnter={() => {
					document.body.style.cursor = "pointer";
				}}
				onPointerLeave={() => {
					document.body.style.cursor = "default";
				}}
			>
				<boxGeometry />
				<meshStandardMaterial color="#9381ff" />
			</mesh>
			<mesh castShadow position={[-2, 0, 0]} onClick={(event) => event.stopPropagation()}>
				<boxGeometry />
				<meshStandardMaterial color="#ff81ff" />
			</mesh>
			<mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
};

export default Objects;
