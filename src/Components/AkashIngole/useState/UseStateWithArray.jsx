import React, { useState } from "react";

let uid = 0;
const UseStateWithArray = () => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    // let prev = [...todoList];
    // prev.push({ id: ++useId, name: todoName });

    // using single line
    setTodoList([...todoList, { id: ++uid, name: todoName }]);
    setTodoName("");
  };

  const handleDelete = (idx, id) => {
    let prev = [...todoList];
    prev.splice(idx, 1);
    setTodoList(prev);

    // second and easy way
    setTodoList(todoList.filter((el, i) => el.id !== id));
  };

  return (
    <div>
      <h1>Use Array as State in React</h1>
      <div>
        <h2>Todo Notes:</h2>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />

        <button onClick={handleAdd}>Add Todo</button>
      </div>
      <div>
        <ul>
          {todoList.map((el, i) => (
            <>
              <li key={el.uid}>{el.name}</li>
              <span>
                <button onClick={handleDelete(i, el.id)}>Delete</button>
              </span>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseStateWithArray;
