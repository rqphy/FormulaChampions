import { useGLTF } from "@react-three/drei"

export default function Formula() {
	const model = useGLTF("./f1/scene.gltf")
	return (
		<primitive
			object={model.scene}
			scale={0.5}
			rotation={[0, Math.PI * 2.2, 0]}
			position={[0, -1.2, 0]}
		/>
	)
}
