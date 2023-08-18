import "../styles/Home.css";

const Home = () => {
	return (
		<div id="home_complete">
			<header>
				<h1>Bienvenidos a la Exploración de React Three Fiber</h1>
			</header>
			<main>
				<section>
					<h2>Descubre el Mundo de React Three Fiber</h2>
					<p>
						Esta página está dedicada a brindarte una introducción exhaustiva a React Three Fiber, una potente biblioteca que combina
						React y Three.js para crear gráficos 3D interactivos en aplicaciones web. Desde conceptos fundamentales hasta proyectos
						avanzados, aquí encontrarás recursos y ejemplos para sumergirte en el emocionante mundo de la visualización tridimensional en
						línea.
					</p>
				</section>
				<section>
					<h2>Desde lo Sencillo hasta lo Más Complejo</h2>
					<p>
						Si eres nuevo en React Three Fiber, no te preocupes. Comenzaremos desde los conceptos básicos, explicando cómo integrar la
						biblioteca en tus aplicaciones React y crear componentes 3D simples. A medida que avances, te llevaremos a través de ejemplos
						que van desde la manipulación de geometrías y cámaras hasta la implementación de animaciones y efectos visuales
						espectaculares.
					</p>
					<p>¿Quieres empezar a explorar? ¡Aquí tienes algunos recursos útiles para comenzar:</p>
					<ul>
						<li>
							<a href="https://react-three-fiber.tnz-nrw.now.sh/" target="_blank" rel="noopener noreferrer">
								Documentación Oficial de React Three Fiber
							</a>
						</li>
						<li>
							<a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
								Página Oficial de Three.js
							</a>
						</li>
						<li>
							<a href="https://github.com/pmndrs/react-three-fiber" target="_blank" rel="noopener noreferrer">
								Repositorio de React Three Fiber en GitHub
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h1>Recursos para React Three Fiber</h1>
					<p>
						La documentación es muy completa y fácil de usar:{" "}
						<a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" rel="noopener noreferrer">
							Documentación R3F
						</a>
					</p>
					<p>
						Paul Henschel (@0xca0a) hizo un excelente tutorial que lo guiará en la creación de un sitio web "tipo Awwwards" con R3F:{" "}
						<a href="https://twitter.com/0xca0a/status/1445409346305892353" target="_blank" rel="noopener noreferrer">
							Tutorial de Paul Henschel
						</a>
					</p>
					<p>
						El Discord de PMNDRS está lleno de gente increíble que estará encantada de ayudarte si lo necesitas:{" "}
						<a href="https://discord.com/invite/poimandres" target="_blank" rel="noopener noreferrer">
							Discord de PMNDRS
						</a>
					</p>
					<p>
						Hazem (@HazemOIbrahim) recreó algunas de las lecciones de Three.js Journey con R3F:{" "}
						<a href="https://journey.pmnd.rs/" target="_blank" rel="noopener noreferrer">
							Lecciones de Three.js Journey con R3F
						</a>
					</p>
				</section>
			</main>
			<footer>
				<p>Derechos de autor © 2023 | Explorando React Three Fiber</p>
			</footer>
		</div>
	);
};

export default Home;
