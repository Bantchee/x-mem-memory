import { render } from "@testing-library/react"
import CurrentScore from "../CurrentScore"


describe("CurrentScore Component", () => {
    test("renders component", () => {
        const { container } = render(<CurrentScore />);
        expect(container).toMatchSnapshot();
    });
});