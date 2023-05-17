import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Formula from "../formula/formula"
import Camera from "../camera/camera"

export default function Experience() {
	return (
		<Canvas shadows>
			{/* <OrbitControls
				enableDamping={true}
				enablePan={false}
				minPolarAngle={Math.PI / 2.06}
				maxPolarAngle={0}
				dampingFactor={0.05}
				rotateSpeed={0.3}
				maxDistance={8.0}
				minDistance={3.8}
			/> */}
			<Camera />
			<directionalLight
				castShadow
				position={[-1, 0, 3]}
				intensity={1.5}
				shadow-normalBias={0.09}
				color={"#e8dfdd"}
			/>
			{/* <ambientLight intensity={0.2} /> */}
			<Formula />
		</Canvas>
	)
}
