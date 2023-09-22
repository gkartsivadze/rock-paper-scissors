import { createContext, useState, useEffect } from "react";
import Choose from "./Choose";
import Rules from "./Rules";
import Chart from "./Chart";
import gsap from "gsap";


export const ChoosenContext = createContext()

export default function Game({ variants, setScore }) {
    const [choosen, setChoosen] = useState(false);
    const [rulesState, setRulesState] = useState(false)
    const [chartState, setChartState] = useState(false)

    useEffect(() => {
        if (choosen) {

            setChartState(true)

            document.getElementById(`variant_button_${choosen}`).animate({
                    transform: "translate(-50%, -50%) translate(-15vw) scale(2)"
            }, {
                fill: "forwards",
                duration: 1000})

            document.querySelectorAll(`button[data-choice-button]:not(#variant_button_${choosen})`).forEach(element => {
                element.animate({
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0)"
                }, {
                    duration: 250,
                    fill: "forwards"
                })
            })
        }
    }, [choosen])


    return (
        <>
            <ChoosenContext.Provider value={setChoosen}>
                <main id="choose" className="relative h-full w-full">
                    {chartState && <Chart />}
                    <Choose variants={variants} pentagonState={!chartState} />
                </main>
                {rulesState && <Rules setRulesState={setRulesState} />}
            </ChoosenContext.Provider>
        </>

    )
};