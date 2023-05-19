import { Text, useScroll } from "@react-three/drei"

export default function TextContainer() {
	return (
		<group>
			<Text color="black" anchorX="center" anchorY="middle">
				hello world!
			</Text>
		</group>
	)
}
