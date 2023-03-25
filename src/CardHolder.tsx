import { SyntheticEvent, useEffect, useState } from "react"
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
    const [cardLists, setCardLists] = useState<string[]>([]);
    const [selectedList, setSelectedList] = useState<string>(cardData[0].name);

    useEffect(function loadCardLists() {
        const cardListOptions = cardData.map(d => d.name);
        setCardLists(cardListOptions);
    }, [])

    function loadCards() {
        const cards = cardData.find(d => d.name === selectedList);
        if (cards) setCards(cards.content);
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

    function updateSelectedList(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedList(event.target.value);
    }

    return (
        <div className="CardHolder-container">
            <h1>Flash Cards!</h1>
            <div>
                <select className="CardHolder-input" onChange={updateSelectedList} value={selectedList}>
                    {cardLists.map((l, i) => <option key={i} value={l}>{l}</option>)}
                </select>
                <button className="CardHolder-input" onClick={loadCards}>
                    Load Cards
                </button>
            </div>
            {showCards && <Card card={cards[currCard]} showAnswer={showAnswer} toggleShowAnswer={toggleShowAnswer} />}
            {showCards && <div>
                <button
                    className="CardHolder-input"
                    onClick={goToPrevCard}
                    disabled={currCard === 0}
                >
                    Prev
                </button>
                <button
                    className="CardHolder-input"
                    onClick={markCardOk}
                >
                    Mark OK
                </button>
                <button
                    className="CardHolder-input"
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