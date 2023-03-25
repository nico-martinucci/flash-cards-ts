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

    return (
        <div className="Card-container" onClick={toggleShowAnswer}>
            {!showAnswer && <p className="Card-content">{card.q}</p>}
            {showAnswer && <p className="Card-content">{card.a}</p>}
        </div>
    )
}


export default Card;