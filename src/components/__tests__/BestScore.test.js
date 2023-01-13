import BestScore from "../BestScore";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BestScore component", () => {
    test("render component", () => {
        const { container } = render(<BestScore />);
        expect(container).toMatchSnapshot();
    });
});