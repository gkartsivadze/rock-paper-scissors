import { createContext, useState, useEffect } from "react";
import Choose from "./Choose";
import Rules from "./Rules";
import Chart from "./Chart";


export const ChoosenContext = createContext()

export default function Game({ variants, setScore }) {
    const [choosen, setChoosen] = useState(false);
    const [rulesState, setRulesState] = useState(false)
    const [chartState, setChartState] = useState(true)

    useEffect(() => {
        if (choosen) {
            document.getElementById(`variant_button_${choosen}`).animate({
                transform: "translate(-50%, -100%) translate(-15vw) scale(2)",
            }, {
                delay: 250,
                duration: 500,
                fill: "forwards"
            })

            document.querySelectorAll(`button[data-choice-button]:not(#variant_button_${choosen})`).forEach(elem => {
                elem.animate({
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0)"
                }, {
                    duration: 500,
                    fill: "forwards"
                })
            })
        }
    }, [choosen])


    return (
        <>
            <ChoosenContext.Provider value={setChoosen}>

                <main id="choose" className="relative row-span-3">
                    <Choose variants={variants} />
                    {chartState && <Chart />}
                </main>
                {rulesState && <Rules setRulesState={setRulesState} />}
            </ChoosenContext.Provider>
        </>

    )
};