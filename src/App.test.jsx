import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("adiciona dois comentários", () => {
  render(<App />);

  const input = screen.getByTestId("comment-input");
  const button = screen.getByTestId("comment-button");

  // Primeiro comentário
  fireEvent.change(input, { target: { value: "Primeiro comentário" } });
  fireEvent.click(button);

  // Segundo comentário
  fireEvent.change(input, { target: { value: "Segundo comentário" } });
  fireEvent.click(button);

  const comments = screen.getAllByTestId("comment-text");
  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent("Primeiro comentário");
  expect(comments[1]).toHaveTextContent("Segundo comentário");
});
