export default function ComputerChoice({ variant }) {

    return (
        <button
            className={`${variant.color} absolute top-1/2 left-1/2 !translate-x-[8vw] -translate-y-1/2 w-[14vw] aspect-square rounded-full shadow-[inset_0_-10px_0_-5px_rgb(0,0,0,0.3)]`}
            >
                <div
                    className=" shadow-[inset_0_10px_0_-5px_rgb(0,0,0,0.3)] w-9/12 aspect-square rounded-full"
                    style={{'--background': `url(${variant.icon})`}}></div>
        </button>
    )
};
