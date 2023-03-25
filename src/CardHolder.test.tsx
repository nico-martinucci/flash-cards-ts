import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/react";
import CardHolder from "./CardHolder";

const testCardData = [
    {
        name: "test data 1",
        content: [
            {
                ok: false,
                q: "test question 1/1",
                a: "test answer 1/1"
            },
            {
                ok: false,
                q: "test question 1/2",
                a: "test answer 1/2"
            }
        ]
    },
    {
        name: "test data 2",
        content: [
            {
                ok: false,
                q: "test question 2/1",
                a: "test answer 2/1"
            },
            {
                ok: false,
                q: "test question 2/2",
                a: "test answer 2/2"
            }
        ]
    }
]

describe("CardHolder component", function () {
    it("renders without crashing", function () {
        render(<CardHolder cardDataInput={testCardData} />)
    });

    it("renders card on list select", function () {
        render(<CardHolder cardDataInput={testCardData} />)

        const loadCardsButton = screen.getByText("Load Cards");

        fireEvent.click(loadCardsButton);

        expect(screen.getByText("test question 1/1")).toBeInTheDocument();
    });

    it("clicking rendered card shows answer", function () {
        render(<CardHolder cardDataInput={testCardData} />)

        const loadCardsButton = screen.getByText("Load Cards");
        fireEvent.click(loadCardsButton);

        const cardDiv = screen.getByTestId("Card-container");
        fireEvent.click(cardDiv);

        expect(screen.getByText("test answer 1/1")).toBeInTheDocument();
    });

    it("next button renders next card", function () {
        render(<CardHolder cardDataInput={testCardData} />)

        const loadCardsButton = screen.getByText("Load Cards");
        fireEvent.click(loadCardsButton);

        const nextButton = screen.getByText("Next");
        fireEvent.click(nextButton);

        expect(screen.getByText("test question 1/2")).toBeInTheDocument();

        const cardDiv = screen.getByTestId("Card-container");
        fireEvent.click(cardDiv);

        expect(screen.getByText("test answer 1/2")).toBeInTheDocument();
    });
})