import React, {useState} from "react";
import Card from "./Card";
import ScoreContainer from "./ScoreContainer";
import wolverineImg from '../img/wolverine.jpeg';
import cyclopsImg from '../img/cyclops.jpeg';
import professorXImg from '../img/professor_x.jpeg';
import stormImg from '../img/storm.jpeg';
import jeanGreyImg from '../img/jean_grey.jpeg';
import nightcrawlerImg from '../img/nightcrawler.jpeg';
import gambitImg from '../img/gambit.jpeg';
import rogueImg from '../img/rogue.jpeg';
import colossusImg from '../img/colossus.jpeg';
import beastImg from '../img/beast.jpeg';
import angelImg from '../img/angel.jpeg';
import icemanImg from '../img/iceman.jpeg';

const Main = (props) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(
        [
            {
                name: "Wolverine",
                imgUrl: wolverineImg,
                hasBeenClicked: false,
            },
            {
                name: "Cyclops",
                imgUrl: cyclopsImg,
                hasBeenClicked: false,
            },
            {
                name: "Professor X",
                imgUrl: professorXImg,
                hasBeenClicked: false,
            },
            {
                name: "Storm",
                imgUrl: stormImg,
                hasBeenClicked: false,
            },
            {
                name: "Jean Grey",
                imgUrl: jeanGreyImg,
                hasBeenClicked: false,
            },
            {
                name: "Nightcrawler",
                imgUrl: nightcrawlerImg,
                hasBeenClicked: false,
            },
            {
                name: "Gambit",
                imgUrl: gambitImg,
                hasBeenClicked: false,
            },
            {
                name: "Rogue",
                imgUrl: rogueImg,
                hasBeenClicked: false,
            },
            {
                name: "Colossus",
                imgUrl: colossusImg,
                hasBeenClicked: false,
            },
            {
                name: "Beast",
                imgUrl: beastImg,
                hasBeenClicked: false,
            },
            {
                name: "Angel",
                imgUrl: angelImg,
                hasBeenClicked: false,
            },
            {
                name: "Iceman",
                imgUrl: icemanImg,
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
        return cards.map(element => (element.name === card.name) ? card : element);
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
                className="flex flex-wrap gap-4 justify-center max-w-[50%] self-center"
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