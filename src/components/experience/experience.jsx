import { Canvas } from "@react-three/fiber"
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei"
import Formula from "../formula/formula"
import Camera from "../camera/camera"
import TextContainer from "../text_container/text_container"

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
			<ScrollControls distance={2} pages={3} damping={0.2}>
				<Scroll>
					<TextContainer />
				</Scroll>
			</ScrollControls>
		</Canvas>
	)
}
