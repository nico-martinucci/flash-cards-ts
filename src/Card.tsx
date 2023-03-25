import { useEffect, useState } from "react";
import "./Card.css"

interface CardProps {
    card: ICard;
    showAnswer: boolean;
    toggleShowAnswer: () => void;
}

export interface ICard {
    ok: boolean;
    q: string;
    a: string;
}

/**
 * 
 */
function Card({ card, showAnswer, toggleShowAnswer }: CardProps) {

    const contentStyle = card.ok ? "Card-content-OK" : "Card-content"

    return (
        <div className="Card-container" onClick={toggleShowAnswer} data-testid="Card-container">
            {card.ok && <p className="Card-OK">OK</p>}
            {!showAnswer && <p className={contentStyle}>{card.q}</p>}
            {showAnswer && <p className={contentStyle}>{card.a}</p>}
        </div>
    )
}


export default Card;