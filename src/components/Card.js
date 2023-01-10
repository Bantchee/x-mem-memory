const Card = (props) => {
    return (
        <button
            className="flex flex-col content-center justify-center border-red-500 border-4 rounded-xl p-2 bg-yellow-400" 
        >
            <img 
                className="rounded-xl w-28 h-36"
                src={props.imgUrl} alt={props.name} 
            />
            <p 
            className="text-neutral-900 bottom-0 text-center font-bold text-base"
            >
                {props.name}
            </p>
        </button>
    )
};

export default Card;