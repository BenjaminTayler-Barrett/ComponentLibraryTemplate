import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {
    it("should render Hello component", () => {
        const expectedText = "Hello World";

        const { container } = render(<Hello text={expectedText} />);

        expect(container).toMatchSnapshot();
    });

    it("should contain the correct text", () => {
        const expectedText = "Hello World";

        render(<Hello text={expectedText} />);

        expect(screen.getByText(expectedText)).toBeTruthy();
    });
});
