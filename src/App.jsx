import React, { useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const addComment = () => {
    if (input.trim() !== '') {
      setComments([...comments, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Comentários</h1>
      <input
        data-testid="comment-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="add-button" onClick={addComment}>Adicionar</button>

      <ul>
        {comments.map((comment, index) => (
          <li key={index} data-testid="comment-item">{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;