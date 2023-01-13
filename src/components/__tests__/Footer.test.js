import React from "react";
import Footer from "../Footer";
import { render } from "@testing-library/react";

describe("Footer component", () => {
    test("renders site footer", () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});

// test github link