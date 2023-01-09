import React, {useState} from "react";
import ScoreContainer from "./ScoreContainer";

const Main = (props) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    return (
        <div
            className="row-span-5 bg-neutral-900 p-4"
        >
            <ScoreContainer
                currentScore={currentScore}
                bestScore={bestScore}
            />
        </div>
    );
};

export default Main;