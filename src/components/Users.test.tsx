import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users", () => {
  test("renders users", () => {
    render(<Users />);

    const userElements = screen.getAllByText(/User name/);

    expect(userElements).toHaveLength(3);
    expect(userElements[1]).toHaveTextContent(/keke/i);
  });
});
