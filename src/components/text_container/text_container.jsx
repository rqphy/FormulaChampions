import { useScroll } from "@react-three/drei"
import Champion from "../champion/champion"
import data from "../../data/champions.json"

export default function TextContainer() {
	console.log(data)
	return (
		<group>
			{[...data].map((el, index) => (
				<Champion index={index} name={`${el.year} - ${el.champion}`} />
			))}
		</group>
	)
}
