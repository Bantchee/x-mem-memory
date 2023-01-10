import { render } from "@testing-library/react";
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
            },
            {
                name: "Cyclops",
                imgUrl: "../img/cyclops.jpeg",
            },
            {
                name: "Professor X",
                imgUrl: "../img/professor_x.jpeg",
            },
            {
                name: "Storm",
                imgUrl: "../img/storm.jpeg",
            },
            {
                name: "Jean Grey",
                imgUrl: "../img/jean_grey.jpeg",
            },
            {
                name: "Nightcrawler",
                imgUrl: "../img/nightcrawler.jpeg",
            },
            {
                name: "Gambit",
                imgUrl: "../img/gambit.jpeg",
            },
            {
                name: "Rogue",
                imgUrl: "../img/rogue.jpeg",
            },
            {
                name: "Colossus",
                imgUrl: "../img/colossus.jpeg",
            },
            {
                name: "Beast",
                imgUrl: "../img/beast.jpeg",
            },
            {
                name: "Angel",
                imgUrl: "../img/angel.jpeg",
            },
            {
                name: "Iceman",
                imgUrl: "../img/iceman.jpeg",
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