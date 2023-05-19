import { useScroll } from "@react-three/drei"
import Champion from "../champion/champion"

export default function TextContainer() {
	const data = [
		"Charles",
		"Seb",
		"Pascal",
		"Lewis",
		"Charles",
		"Seb",
		"Pascal",
		"Lewis",
		"Charles",
		"Seb",
		"Pascal",
		"Lewis",
	]

	return (
		<group>
			{data.map((el, index) => (
				<Champion index={index} name={el} />
			))}
		</group>
	)
}
