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
                onClick={() => handleCardClick(name)}
            />
        )
    };

    // Get Clicked Card
    // If clickedCard has been clicked before
        // resetCards()
        // shuffleCards()
    // Else
        //  clickCard.hasBeenClieck = true
        // setCards(replaceByName(clickCard, cards));
        // increaseCurrentScore
    const handleCardClick = (name) => {
        let clickedCard = cards.find(element => element.name === name);
        
        if(clickedCard.hasBeenClicked) {
            setCards(resetCards());
            setCards(shuffleCards());
            resetCurrentScore();
        }
        else {
            clickedCard.hasBeenClicked = true;
            setCards(replaceCardByName(clickedCard));
            setCards(shuffleCards());
            increaseScore();
        }
    }

    const resetCards = () => {
        return cards.map(card => {
            card.hasBeenClicked = false;
            return card;
        });
    }

    const shuffleCards = () => {
        const newCards = cards;

        for (let i = newCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = newCards[i];
            newCards[i] = newCards[j];
            newCards[j] = temp;
        }

        return newCards;
    };

    const replaceCardByName = (card) => {
        return cards.map(element =>  (element.name === card.name) ? card : element);
    };

    const increaseScore = () => {
        setCurrentScore(currentScore + 1);

        if(currentScore + 1 > bestScore) {
            setBestScore(bestScore + 1);
        }
    };

    const resetCurrentScore = () => {
        setCurrentScore(0);
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