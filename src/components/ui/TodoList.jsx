import React from "react";
import { useState, useRef, useEffect } from "react";

const TodoList = ({ task, toggleTaskCompleted, editTaskCompleted, deleteTaskCompleted }) => {
  // Focusing Effect
  const inputRef = useRef(null);

  // Editing View
  const [isEdit, setIsEdit] = useState(false);

  const onClickEvent = () => {
    setIsEdit(false);
    setNewName(task.name);
  };

  // Edit Task Name
  const [newName, setNewName] = useState(task.name);

  const onSubmitEvent = (e) => {
    e.preventDefault();

    setIsEdit(false);
    editTaskCompleted(task.id, newName);
  };

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  });

  const viewTemplate = (
    <li className="viewBox">
      <label>
        <input type="checkbox" className="viewInput" onChange={() => toggleTaskCompleted(task.id)} />
        <span className={task.completed ? "line" : ""}>{task.name}</span>
      </label>
      <div>
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => deleteTaskCompleted(task.id)}>Delete</button>
      </div>
    </li>
  );

  const editingTemplate = (
    <li className="editBox">
      <form onSubmit={onSubmitEvent}>
        <input type="text" className="editInput" value={newName} ref={inputRef} onChange={(e) => setNewName(e.target.value)} />
        <div>
          <button type="button" onClick={onClickEvent}>X</button>
          <button type="submit" disabled={task.name === newName || !newName}>Save</button>
        </div>
      </form>
    </li>
  );

  return <>{isEdit ? editingTemplate : viewTemplate}</>;
};

export default TodoList;