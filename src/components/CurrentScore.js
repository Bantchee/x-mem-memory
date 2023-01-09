const CurrentScore = (props) => {
    return (
        <div
            className="pt-1 pb-1 border-4 w-64 flex justify-center rounded-lg border-yellow-400"
        >
            <span
                className="text-red-500 m-auto"
            >
                Current Score: {props.score}
            </span>
        </div>
    )
}

export default CurrentScore;