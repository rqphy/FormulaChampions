import { useScroll } from "@react-three/drei"
import Champion from "../champion/champion"
import data from "../../data/champions.json"

export default function TextContainer() {
	return (
		<group>
			{[...data].map((el, index) => (
				<Champion
					key={index}
					index={index}
					name={`${el.year} - ${el.champion}`}
				/>
			))}
		</group>
	)
}
