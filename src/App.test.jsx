import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adiciona dois comentários', () => {
  render(<App />);

  const input = screen.getByTestId('comment-input');
  const button = screen.getByTestId('add-button');

  // Adiciona o primeiro comentário
  fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(button);

  // Adiciona o segundo comentário
  fireEvent.change(input, { target: { value: 'Segundo comentário' } });
  fireEvent.click(button);

  const comments = screen.getAllByTestId('comment-item');
  expect(comments).toHaveLength(2);
  expect(comments[0].textContent).toBe('Primeiro comentário');
  expect(comments[1].textContent).toBe('Segundo comentário');
});