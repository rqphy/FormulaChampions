import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"

export default function Formula() {
	const model = useGLTF("./f1/scene.gltf")

	useEffect(() => {
		// Set wireframe material on all meshes in the model
		model.scene.traverse((child) => {
			if (child.isMesh) {
				child.material.wireframe = true
			}
		})
	}, [])

	return (
		<primitive
			object={model.scene}
			scale={0.8}
			rotation={[Math.PI * 0.01, Math.PI * 2.21, Math.PI * 0.025]}
			position={[-0.4, -1, 0]}
		/>
	)
}
