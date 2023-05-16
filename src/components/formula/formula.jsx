import { useGLTF } from "@react-three/drei"

export default function Formula() {
	const model = useGLTF("./f1/scene.gltf")
	return (
		<primitive
			object={model.scene}
			scale={0.8}
			rotation={[Math.PI * 0.01, Math.PI * 2.1, Math.PI * 0.025]}
			position={[0, -1, 0]}
		/>
	)
}
