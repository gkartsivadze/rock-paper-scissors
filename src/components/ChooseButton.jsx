import { useContext } from "react"
import { ChoosenContext } from "../App"

export default function ChooseButton({ variant }) {
    const setChoise = useContext(ChoosenContext);

    return (
        <button
            onClick={() => setChoise(variant.id)}
            style={{ '--position': variant.id }}
            className={`${variant.color} rounded-full`}>
                <div
                    className="shadow-inner shadow-gray-600 w-24 h-24 rounded-full"
                    style={{'--background': `url(${variant.icon})`}}></div>
        </button>
    )
};