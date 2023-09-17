import ChooseButton from "./ChooseButton";

export default function Choose({ variants }) {
    return (
        <main id="choose" className=" row-span-3 relative">
            { variants.map(variant => <ChooseButton key={variant.id} variant={variant} />) }
            <svg
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 300 300"
                width="300" height="300">
            </svg>
        </main>
    )
};