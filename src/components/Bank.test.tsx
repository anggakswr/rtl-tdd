import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bank from "./Bank";

describe("Bank", () => {
  test("renders text & input", () => {
    render(<Bank />);

    screen.getByText(/Your Money/);
    screen.getByPlaceholderText("Money Amount");
  });

  test("renders text exactly like input value", async () => {
    userEvent.setup();

    render(<Bank />);

    const inputElement = screen.getByPlaceholderText("Money Amount");

    await userEvent.type(inputElement, "{backspace}5000");

    screen.getByText("Your Money: 5000");
  });
});
