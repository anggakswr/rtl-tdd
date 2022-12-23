import { render, screen } from "@testing-library/react";
import Mantan from "./Mantan";
import axios from "axios";

jest.mock("axios");

describe("Mantan", () => {
  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders mantans", async () => {
    axios.get = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 3, name: "C" },
        ],
      })
    );

    render(<Mantan />);

    const liElements = await screen.findAllByText(/Mantan/);

    expect(liElements).toHaveLength(3);
  });
});
