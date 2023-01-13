import Card from "../Card";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Card Component", () => {
    test("render card component", () => {
        const { container } = render(<Card />);
        expect(container).toMatchSnapshot();
    });

    test("calls onClick when card is clicked", () => {
        const onClickMock = jest.fn();
        render(<Card onClick={onClickMock} />);
        const card = screen.getByRole("button");

        userEvent.click(card);

        expect(onClickMock).toHaveBeenCalled();
    });
});