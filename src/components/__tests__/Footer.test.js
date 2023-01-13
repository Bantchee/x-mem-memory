import React from "react";
import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Footer component", () => {
    test("renders site footer", () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });

    test("renders link to github", () => {
        render(<Footer />);
        const link = screen.getByRole("link");

        expect(link.getAttribute("href")).toBe("https://github.com/Bantchee");
    });
});