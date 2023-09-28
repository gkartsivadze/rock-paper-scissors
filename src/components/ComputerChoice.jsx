export default function ComputerChoice({ variant }) {
    
    return (
        <button
            id="computer_choice"
            className={`${variant.color} absolute top-1/2 left-1/2 w-[14vw] aspect-square grid place-items-center rounded-full shadow-[inset_0_-10px_0_-5px_rgb(0,0,0,0.3)] transition-all`}
            >
                <div
                    className=" shadow-[inset_0_10px_0_-5px_rgb(0,0,0,0.3)] w-9/12 aspect-square rounded-full"
                    style={{'--background': `url(${variant.icon})`}}></div>
        </button>
    )
};
