import Pentagon from "../assets/Pentagon";
import ChooseButton from "./ChooseButton";

export default function Choose({ variants }) {
    return (
        <main id="choose" className=" row-span-3 relative">
            { variants.map(variant => <ChooseButton key={variant.id} variant={variant} />) }
            <Pentagon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 fill-gray-600" />
        </main>
    )
};