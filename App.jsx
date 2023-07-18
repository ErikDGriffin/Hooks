import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  function handleChange (event) {
    setText(event.target.value);
  };

  function onSubmit (event) {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
