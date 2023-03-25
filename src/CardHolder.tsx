import { useState } from "react"
import Card from "./Card"
import { ICard } from "./Card";
import cardData from "./cardData";
import "./CardHolder.css"

/**
 * 
 */
function CardHolder() {
    const [cards, setCards] = useState<ICard[]>([]);
    const [currCard, setCurrCard] = useState<number>(0);
    const [showCards, setShowCards] = useState<boolean>(false);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function loadCards() {
        setCards(cardData);
        setShowCards(true);
    }

    function goToPrevCard() {
        setCurrCard(curr => curr - 1);
        setShowAnswer(false);
    }

    function goToNextCard() {
        setCurrCard(curr => curr + 1);
        setShowAnswer(false);
    }

    function markCardOk() {
        setCards(curr => {
            let newCards = [...curr];
            newCards[currCard] = {
                ...curr[currCard],
                ok: true
            };
            return newCards;
        })
    }

    function toggleShowAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="CardHolder-container">
            <h1>Flash Cards!</h1>
            <button className="CardHolder-button" onClick={loadCards}>
                Load Cards
            </button>
            {showCards && <Card card={cards[currCard]} showAnswer={showAnswer} toggleShowAnswer={toggleShowAnswer} />}
            {showCards && <div className="CardHolder-buttons">
                <button
                    className="CardHolder-button"
                    onClick={goToPrevCard}
                    disabled={currCard === 0}
                >
                    Prev
                </button>
                <button
                    className="CardHolder-button"
                    onClick={markCardOk}
                >
                    Mark OK
                </button>
                <button
                    className="CardHolder-button"
                    onClick={goToNextCard}
                    disabled={cards && currCard === cards?.length - 1}
                >
                    Next
                </button>
            </div>}
        </div>
    )
}


export default CardHolder;