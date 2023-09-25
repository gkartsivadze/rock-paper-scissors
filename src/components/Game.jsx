import { createContext, useState, useEffect } from "react";
import Choose from "./Choose";
import Rules from "./Rules";
import Chart from "./Chart";
import ComputerChoice from "./ComputerChoice";
import LostAction from "../actions/LostAction";


export const ChoosenContext = createContext()

export default function Game({ variants, setScore }) {
    const [choosen, setChoosen] = useState(false);
    const [rulesState, setRulesState] = useState(false)
    const [chartEnabledState, setChartEnabledState] = useState(false)
    const [chartState, setChartState] = useState(0)
    const [computerSymbol, setComputerSymbol] = useState();

    useEffect(() => {
        if (choosen) {

            setChartEnabledState(true)
            // let randomNum = Math.round(Math.random() * 4 + 1)
            let randomNum = Math.round(1) // TEST
            setComputerSymbol(randomNum)

            document.getElementById(`variant_button_${choosen}`).classList.add("user_choice_active");

            document.querySelectorAll(`button[data-choice-button]:not(#variant_button_${choosen})`).forEach(element => {
                element.classList.add("active")
            })

            if (variants.find(x => x.id == randomNum).wins.includes(choosen)) {
                setTimeout(() => {
                    add()
                    LostAction(choosen);
                    setChartState(1)
                }, 1500)
            } else if (randomNum == choosen) {

            } else {
                setTimeout(() => {
                    reset();
                }, 1500)
            }



        }
    }, [choosen])

    function add() {
        setScore(prev => prev + 1)
        console.log("add");
    }

    function reset() {
        setScore(0)
        console.log("reset");
    }

    function rematch() {

    }

    return (
        <>
            <ChoosenContext.Provider value={setChoosen}>
                <main id="choose" className="relative h-full w-full">
                    {chartEnabledState && <>
                        <Chart chartState={chartState} rematch={rematch} />
                        <ComputerChoice variant={variants.find(x => x.id == computerSymbol)} />
                    </>}
                    <Choose variants={variants} pentagonState={!chartEnabledState} />
                </main>
                {rulesState && <Rules setRulesState={setRulesState} />}
            </ChoosenContext.Provider>
        </>

    )
};