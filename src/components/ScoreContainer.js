import CurrentScore from "./CurrentScore";
import BestScore from "./BestScore";

const ScoreContainer = (props) => {
    return (
        <div
            className="flex text-2xl gap-16 justify-center"
        >
            <CurrentScore
                score={props.currentScore}
            />
            <BestScore 
                score={props.bestScore}
            />
        </div>
    )
}

export default ScoreContainer;