export default function Chart() {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 rounded-full bg-black/50 w-[14vw] aspect-square -translate-y-3/4 -translate-x-[calc(50%+15vw)]" />
            <div className="absolute top-1/2 left-1/2 rounded-full bg-black/50 w-[14vw] aspect-square -translate-y-3/4 -translate-x-[calc(50%-15vw)]" />
        </>
    )
};
