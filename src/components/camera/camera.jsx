import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
const coef = 0.25

export default function Camera() {
	const cameraRef = useRef()

	useFrame(({ mouse }) => {
		const { current: camera } = cameraRef

		// Adjust the camera's position or rotation based on mouse movement
		camera.position.x = coef * mouse.x
		camera.position.y = coef * mouse.y * 0.5
		camera.lookAt(0, 0, 0)
	})

	return (
		<PerspectiveCamera
			ref={cameraRef}
			makeDefault
			position={[0, 0, 6]}
			far={200}
			near={0.1}
			fov={45}
		/>
	)
}
