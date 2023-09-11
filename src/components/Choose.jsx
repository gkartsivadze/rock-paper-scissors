import ChooseButton from "./ChooseButton";

export default function Choose({ variants }) {
    return (
        <main id="choose" className=" row-span-3">
            { variants.map(variant => <ChooseButton key={variant.id} variant={variant} />) }
        </main>
    )
};