import Main from "../Main";
import { render, screen, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
// import { act } from "react-dom/test-utils";

describe("Main Component", () => {
    test("renders", () => {
        const { container } = render(<Main />);
        expect(container).toMatchSnapshot();
    });


});

describe("Card Clicked Once", () => {
    test("Current Score increases", () => {
        render(<Main />);
        const cards = screen.getAllByRole("button");
        const currentScore = screen.getByText(/Current Score:/i);

        userEvent.click(cards[0]);
        expect(currentScore.textContent).toMatch(/Current Score: 1/i);
    });

    test("Best Score increases", () => {
        render(<Main />);
        const cards = screen.getAllByRole("button");
        const bestScore = screen.getByText(/Best Score:/i);

        userEvent.click(cards[0]);
        
        expect(bestScore.textContent).toMatch(/Best Score: 1/i);
    });
});