import { render, screen, fireEvent } from "@testing-library/react";
import List from "./List";

describe("List.jsx", () => {
  it("should be able to add a task", () => {
    render(<List />);

    const inputElement = screen.getByPlaceholderText("Adicionar nova tarefa");
    const buttonElement = screen.getByTestId("add-task");

    fireEvent.change(inputElement, {
      target: {
        value: "Estudar react",
      },
    });

    fireEvent.click(buttonElement);

    const addedFirstTaskTitle = screen.getByText("Estudar react");

    expect(addedFirstTaskTitle).toHaveTextContent("Estudar react");

    fireEvent.change(inputElement, {
      target: {
        value: "Estudar teste",
      },
    });

    fireEvent.click(buttonElement);

    const addedSecondTaskTitle = screen.getByText("Estudar teste");
    expect(addedSecondTaskTitle).toHaveTextContent("Estudar teste");
  });
});
