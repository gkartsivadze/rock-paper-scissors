import Pentagon from "../assets/Pentagon";
import ChooseButton from "./ChooseButton";

export default function Choose({ variants }) {
    return (
        <>
            <Pentagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            { variants.map(variant => <ChooseButton key={variant.id} variant={variant} />) }
            </>
    )
}