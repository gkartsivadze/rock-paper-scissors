import { useState } from "react"

export default function Chart({ chartState = 0, rematch }) {
    const [showState, setShowState] = useState(false)

    setTimeout(() => {
        setShowState(true)
    }, 1500)
    return (
        <>
            {
                showState
                &&
                <div className="grid w-[20vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl text-center py-2">YOU WON</h1>
                    <button className=" bg-white text-dark rounded-md px-12 py-2" onClick={rematch}>RESET</button>
                </div>
            }
            <div className={`absolute top-1/2 left-1/2 transition-all ${chartState == 0 ? "-translate-x-[calc(50%+10vw)]" : "-translate-x-[calc(50%+20vw)]"} -translate-y-1/2 rounded-full bg-black/50 w-[14vw] aspect-square`}>
                <h1 className=" -translate-y-20 text-2xl text-center font-bold">YOU PICKED</h1>
            </div>
            <div className={`absolute top-1/2 left-1/2 transition-all ${chartState == 0 ? "-translate-x-[calc(50%-10vw)]" : "-translate-x-[calc(50%-20vw)]"} -translate-y-1/2 rounded-full bg-black/50 w-[14vw] aspect-square`}>
                <h1 className=" -translate-y-20 text-2xl text-center font-bold">THE HOUSE PICKED</h1>
            </div>
        </>
    )
};
