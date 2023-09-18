import ChooseButton from "./ChooseButton";
import pentagonImg from "../assets/pentagon.svg"

export default function Choose({ variants }) {
    return (
        <main id="choose" className=" row-span-3 relative">
            { variants.map(variant => <ChooseButton key={variant.id} variant={variant} />) }
            {/* <img
                src={pentagonImg}
                alt="" /> */}
        </main>
    )
};