import { useContext } from "react"
import { ChoosenContext } from "../App"

export default function ChooseButton({ variant }) {
    const setChoise = useContext(ChoosenContext);

    return (
        <button
            onClick={() => setChoise(variant.id)}
            style={{ '--position': variant.id }}
            className={`${variant.color} w-[6vw] aspect-square rounded-full border-b-8 border-gray-300/25`}>
                <div
                    className=" border-t-4 border-gray-300 w-8/12 aspect-square rounded-full"
                    style={{'--background': `url(${variant.icon})`}}></div>
        </button>
    )
};