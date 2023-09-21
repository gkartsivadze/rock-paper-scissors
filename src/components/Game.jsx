import { createContext, useState, useEffect } from "react";
import Choose from "./Choose";
import Rules from "./Rules";
import Chart from "./Chart";
import gsap from "gsap";


export const ChoosenContext = createContext()

export default function Game({ variants, setScore }) {
    const [choosen, setChoosen] = useState(false);
    const [rulesState, setRulesState] = useState(false)
    const [chartState, setChartState] = useState(true)

    useEffect(() => {
        if (choosen) {

            gsap.to(`#variant_button_${choosen}`, 0.4, {
                transform: "translate(-50%, -100%) translate(-15vw) scale(2)"
            })

            gsap.to(`button[data-choice-button]:not(#variant_button_${choosen})`, 0.25, {
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0)"
                })
        }
    }, [choosen])


    return (
        <>
            <ChoosenContext.Provider value={setChoosen}>

                <main id="choose" className="relative row-span-3">
                    {chartState && <Chart />}
                    <Choose variants={variants} />
                </main>
                {rulesState && <Rules setRulesState={setRulesState} />}
            </ChoosenContext.Provider>
        </>

    )
};