import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Formula from "../formula/formula"

export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-1, -1, 6],
			}}
		>
			<OrbitControls
				enableDamping={true}
				enablePan={false}
				minPolarAngle={Math.PI / 2.06}
				maxPolarAngle={0}
				dampingFactor={0.05}
				rotateSpeed={0.3}
				maxDistance={8.0}
				minDistance={3.8}
				autoRotate={true}
				autoRotateSpeed={-0.4}
			/>
			{/* <mesh>
				<boxGeometry />
				<meshBasicMaterial color={"red"} />
			</mesh> */}
			<Formula />
		</Canvas>
	)
}
