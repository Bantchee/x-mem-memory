import React from 'react';
import Header from "../Header";
import { render } from "@testing-library/react"

describe("Header Component", () => {
    test('renders website header', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});