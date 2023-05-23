import { Text } from "@react-three/drei"

const scale = 0.1

export default function Champion({ name, index }) {
	return (
		<Text
			position={[-1, index * -2 * scale + 1, 3]}
			color="black"
			scale={scale}
			anchorX="left"
			anchorY="top"
			font="font/HUMANE/Web-TT/Humane-Bold.ttf"
		>
			{name}
		</Text>
	)
}
