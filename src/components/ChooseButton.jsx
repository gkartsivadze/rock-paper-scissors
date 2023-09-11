import { useContext } from "react"
import { ChoosenContext } from "../App"

export default function ChooseButton({ variant }) {
    const setChoise = useContext(ChoosenContext);

    const style = [
        'bg-rock',
        'bg-paper',
        'bg-scissors',
        'bg-lizard',
        'bg-cyan',
    ]

    return (
        <button
            onClick={() => setChoise(variant.id)}
            style={{ '--position': variant.id }}
            className={`bg-${variant.color} rounded-full `}>
                <img src={variant.icon} />
        </button>
    )
};