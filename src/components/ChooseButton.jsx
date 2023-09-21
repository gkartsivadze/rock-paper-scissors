import { useContext } from "react"
import { ChoosenContext } from './Game'

export default function ChooseButton({ variant }) {
    const setChoise = useContext(ChoosenContext);

    return (
        <button
            id={`variant_button_${variant.id}`}
            onClick={() => setChoise(variant.id)}
            style={{ '--position': variant.id }}
            data-choice-button={true}
            className={`${variant.color} w-[7vw] aspect-square rounded-full shadow-[inset_0_-10px_0_-5px_rgb(0,0,0,0.3)]`}>
                <div
                    className=" shadow-[inset_0_10px_0_-5px_rgb(0,0,0,0.3)] w-9/12 aspect-square rounded-full"
                    style={{'--background': `url(${variant.icon})`}}></div>
        </button>
    )
};