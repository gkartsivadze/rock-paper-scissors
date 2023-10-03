import { createContext, useState, useEffect } from "react";
import Choose from "./Choose";
import Rules from "./Rules";
import Chart from "./Chart";
import ComputerChoice from "./ComputerChoice";
import Action from "../actions/Action";
import ResetAction from "../actions/ResetAction";
import WinnerAction from "../actions/WinnerAction";


export const ChoosenContext = createContext()

export default function Game({ variants, setScore }) {
    const [choosen, setChoosen] = useState(false);
    const [rulesState, setRulesState] = useState(false)
    const [chartEnabledState, setChartEnabledState] = useState(false)
    const [chartState, setChartState] = useState(0)
    const [computerSymbol, setComputerSymbol] = useState();
    const [labelText, setLabelText] = useState("")

    useEffect(() => {
        if (choosen) {

            setChartEnabledState(true);
            // let randomNum = Math.round(Math.random() * 4 + 1)
            let randomNum = 1 // TEST
            setComputerSymbol(randomNum);

            document.getElementById(`variant_button_${choosen}`).classList.add("user_choice_active");

            document.querySelectorAll(`button[data-choice-button]:not(#variant_button_${choosen})`).forEach(element => {
                element.classList.add("active");
                element.setAttribute("disabled", true)
            })

            setTimeout(() => {
                if (variants.find(x => x.id == randomNum).wins.includes(choosen)) {
                    add()
                    setLabelText("YOU WON");
                } else if (randomNum == choosen) {
                    setLabelText("DRAW");
                } else {
                    reset();
                    setLabelText("YOU LOST");
                }
                Action(choosen, 1);
                setChartState(1);
            }, 1500)



        }
    }, [choosen])

    function add() {
        setScore(prev => prev + 1);
        WinnerAction(document.getElementById(`variant_button_${choosen}`));
    }

    function reset() {
        setScore(0);
        WinnerAction(document.getElementById("computer_choice"));
    }

    function rematch() {
        ResetAction(choosen, setChoosen, setChartEnabledState, setChartState, setComputerSymbol);
    }

    return (
        <>
            <ChoosenContext.Provider value={setChoosen}>
                <main id="choose" className="relative h-full w-full">
                    {chartEnabledState && <>
                        <Chart chartState={chartState} rematch={rematch} labelText={labelText} />
                        <ComputerChoice variant={variants.find(x => x.id == computerSymbol)} />
                    </>}
                    <Choose variants={variants} pentagonState={!chartEnabledState} />
                </main>
                {rulesState && <Rules setRulesState={setRulesState} />}
            </ChoosenContext.Provider>
        </>

    )
};