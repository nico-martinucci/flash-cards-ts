import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Card from "./Card"

const testCard = {
    ok: false,
    q: "test question",
    a: "test answer"
}

describe("Card component", function () {
    it("renders without crashing", function () {
        render(<Card card={testCard} showAnswer={false} toggleShowAnswer={() => { }} />)
    });

    it("renders card on page", function () {
        render(<Card card={testCard} showAnswer={false} toggleShowAnswer={() => { }} />)

        expect(screen.getByText("test question")).toBeInTheDocument();
    });
})