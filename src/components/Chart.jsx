export default function Chart() {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 -translate-x-[calc(50%+15vw)] -translate-y-1/2 rounded-full bg-black/50 w-[14vw] aspect-square">
                <h1 className=" -translate-y-20 text-4xl text-center font-bold text-dark">Your choice</h1>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-[calc(50%-15vw)] -translate-y-1/2 rounded-full bg-black/50 w-[14vw] aspect-square">
                <h1 className=" -translate-y-20 text-4xl text-center font-bold text-dark">Opponent's choice</h1>
            </div>
        </>
    )
};
