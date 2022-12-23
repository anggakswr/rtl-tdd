import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders number and button", () => {
    render(<Counter />);

    const numberElement = screen.getByText("0");
    const buttonElement = screen.getByText("plus");

    expect(numberElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 1", async () => {
    userEvent.setup();

    render(<Counter />);

    const buttonElement = screen.getByText("plus");
    await userEvent.click(buttonElement);

    // const numberElement = screen.getByText("1");
    // expect(numberElement).toHaveTextContent("1");

    screen.getByText("1");
  });
});
