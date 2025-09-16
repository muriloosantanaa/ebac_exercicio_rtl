import React, { useState } from "react";

function App() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleAddComment = () => {
    if (text.trim()) {
      setComments([...comments, text]);
      setText("");
    }
  };

  return (
    <div>
      <h1>Comentários</h1>
      <input
        data-testid="comment-input"
        type="text"
        placeholder="Digite seu comentário"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="comment-button" onClick={handleAddComment}>
        Adicionar
      </button>

      <ul>
        {comments.map((c, i) => (
          <li key={i} data-testid="comment-text">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
