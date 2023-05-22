import { Text } from "@react-three/drei"

export default function Champion({ name, index }) {
	return (
		<Text
			position={[-2, index * -0.5 + 2, 0]}
			color="black"
			scale={0.2}
			anchorX="left"
			anchorY="top"
			key={index}
		>
			{name}
		</Text>
	)
}
