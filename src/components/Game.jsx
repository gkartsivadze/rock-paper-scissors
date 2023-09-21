import { useState } from "react";
import Choose from "./Choose";
import Rules from "./Rules";

export default function Game({ variants }) {
    const [rulesState, setRulesState] = useState(true)
    return (
        <>
            <Choose variants={variants} />
            {rulesState && <Rules setRulesState={setRulesState} />}
        </>
        
    )
};
