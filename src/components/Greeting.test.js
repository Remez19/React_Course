import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

// to describe our test suit we can give it a name
// Using "describe()"

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    // Arrange - Set up the test data, test conditions and test enviroment.
    render(<Greeting />);

    // Act - Run the logic that should be tested (e.g execute function).
    //  In this example there is no Act part.

    // Assert - Compare execution results with expected results.
    // To "getByText()" we can add another parameter { exact: false }.
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders text before click", () => {
    render(<Greeting />);
    const pTextElement = screen.getByText("Its good to see", { exact: false });
    expect(pTextElement).toBeInTheDocument();
  });

  test("render text after click", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const pTextElement = screen.getByText("Change!");
    expect(pTextElement).toBeInTheDocument();
  });

  test("text not exist after click", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const pTextElement = screen.queryByText("Its good to see you!");
    expect(pTextElement).toBeNull();
  });
});
