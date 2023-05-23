import { Text } from "@react-three/drei"

const scale = 0.08

export default function Champion({ name, index }) {
	return (
		<Text
			position={[-1, index * -3 * scale + 1, 3]}
			color="black"
			scale={scale}
			anchorX="left"
			anchorY="top"
			key={index}
		>
			{name}
		</Text>
	)
}
