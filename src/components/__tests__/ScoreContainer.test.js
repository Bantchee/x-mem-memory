import ScoreContainer from "../ScoreContainer";
import { render } from "@testing-library/react";

describe("ScoreContainer Component", () => {
    test("render component", () => {
        const { container } = render(<ScoreContainer/>);
        expect(container).toMatchSnapshot();
    });
});