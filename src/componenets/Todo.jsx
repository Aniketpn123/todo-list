import { useState } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  function Predefault(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form action="" onSubmit={Predefault}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
