export default function ChooseButton({ variant }) {
    
    const style = [
        'bg-rock',
        'bg-paper',
        'bg-scissors',
        'bg-lizard',
        'bg-cyan',
    ]

    return (
        <button
            style={{ '--position': variant.id }}
            className={`bg-${variant.color} rounded-full `}>
            <img className=" bg-white" src={variant.icon} />
        </button>
    )
};