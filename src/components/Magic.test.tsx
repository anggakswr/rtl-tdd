import { render, screen } from "@testing-library/react";
import Magic from "./Magic";

describe("Magic", () => {
  test("do not render text in the first render", () => {
    render(<Magic />);

    const textElement = screen.queryByText("Abrakadabra");
    expect(textElement).not.toBeInTheDocument();
  });

  test("renders text after 3 secs", async () => {
    render(<Magic />);

    const textElement = await screen.findByText("Abrakadabra", undefined, {
      timeout: 4000,
    });

    expect(textElement).toBeInTheDocument();
  });
});
