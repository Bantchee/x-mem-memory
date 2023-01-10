import React, {useState} from "react";
import Card from "./Card";
import ScoreContainer from "./ScoreContainer";

const Main = (props) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(
        [
            {
                name: "Wolverine",
                imgUrl: "../img/wolverine.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Cyclops",
                imgUrl: "../img/cyclops.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Professor X",
                imgUrl: "../img/professor_x.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Storm",
                imgUrl: "../img/storm.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Jean Grey",
                imgUrl: "../img/jean_grey.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Nightcrawler",
                imgUrl: "../img/nightcrawler.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Gambit",
                imgUrl: "../img/gambit.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Rogue",
                imgUrl: "../img/rogue.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Colossus",
                imgUrl: "../img/colossus.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Beast",
                imgUrl: "../img/beast.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Angel",
                imgUrl: "../img/angel.jpeg",
                hasBeenClicked: false,
            },
            {
                name: "Iceman",
                imgUrl: "../img/iceman.jpeg",
                hasBeenClicked: false,
            },
        ]
    );

    const renderCard = (index, name, imgUrl) => {
        return (
            <Card 
                key={index}
                name={name}
                imgUrl={imgUrl}
            />
        )
    };

    const shuffleCards = (cards) => {
        return cards;
    };

    return (
        <div
            className="row-span-5 bg-neutral-900 p-4 flex flex-col gap-4"
        >
            <ScoreContainer
                currentScore={currentScore}
                bestScore={bestScore}
            />
            <div
                className="flex flex-wrap gap-4 justify-center pr-96 pl-96"
            >
                {
                    cards.map(
                        (card, index) => {
                            return renderCard(index, card.name, card.imgUrl);  
                        }
                    )
                }
            </div>
            
        </div>
    );
};

export default Main;