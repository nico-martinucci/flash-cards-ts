import { useState } from "react";
import "./Card.css"

interface CardProps {
    card: ICard
}

export interface ICard {
    ok: boolean;
    q: string;
    a: string;
}

/**
 * 
 */
function Card({ card }: CardProps) {
    const [showAnswer, setShowAnswer] = useState<Boolean>(false);

    function toggleShowAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="Card-container" onClick={toggleShowAnswer}>
            {!showAnswer && <p className="Card-content">{card.q}</p>}
            {showAnswer && <p className="Card-content">{card.a}</p>}
        </div>
    )
}


export default Card;