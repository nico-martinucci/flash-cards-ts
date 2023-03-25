import { useState } from "react";

interface CardProps {
    card: ICard
}

interface ICard {
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
            {!showAnswer && <p>{card.q}</p>}
            {showAnswer && <p>{card.a}</p>}
        </div>
    )
}


export default Card