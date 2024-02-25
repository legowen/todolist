import React from "react";
import { useState } from "react";
// Components
import Title from "../ui/Title";
import Form from "../ui/Form";
import FilterButton from "../ui/FilterButton";
import TodoList from "../ui/TodoList";
// Style
import styled from "styled-components";
// Wraaper Style
const Wraaper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1.5rem;

  width: 500px;
  height: calc(100% - 5rem);
  background-color: white;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px black;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
// ListLength Style
const ListLength = styled.h2`
  padding-top: 1rem;
`;
// List Style
const List = styled.ul`
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  .viewBox {
      
    label {
        cursor: pointer;
    }

    input {
      display: none;
      border: 1px solid black;
    }

    span {
      width: 100%;
    }

    .line {
      text-decoration: line-through;
    }

    div {
      display: flex;
      gap: 0.5rem;

      button {
        margin-top: 0.5rem;

        width: 100%;
        height: 30px;

        border-radius: 0.5rem;
      }

      button:nth-of-type(1) {
        border: 1px solid black;
        color: black;
      }

      button:nth-of-type(2) {
        background-color: #ff0000;
        color: white;
      }
    }
  }

  .editBox {
    input {
      width: 100%;
      border: 1px solid black;
    }

    div {
      display: flex;
      gap: 0.5rem;

      button {
        margin-top: 0.5rem;

        width: 100%;
        height: 30px;

        border-radius: 0.5rem;
      }

      button:nth-of-type(1) {
        border: 1px solid black;
        color: black;
      }

      button:nth-of-type(2) {
        background-color: #2c86da;
        color: white;
        opacity: 100%;
      }

      button:nth-of-type(2):disabled {
        opacity: 50%;
      }
    }
  }
`;

// Initial Data
const seedData = () => {
  const seed = [
    { id: "list1", name: "MovieDB Logo Opt", completed: true },
    { id: "list2", name: "Assembling LEGO", completed: false },
    { id: "list3", name: "VUE Study", completed: false },
    { id: "list4", name: "Soccer Practice 8pm-9pm", completed: false },
    { id: "list5", name: "Preparing Practical Interview", completed: false },
  ];

  setData(seed);
};

const setData = (seed) => {
  localStorage.setItem("todoList", JSON.stringify(seed));
};

if (!JSON.parse(localStorage.getItem("todoList"))) {
  seedData();
}

// Filter Button 
const FilterMap = {
  All: () => true,
  Done: (task) => task.completed,
  ToDO: (task) => !task.completed,
};

const FilterNames = Object.keys(FilterMap);

const Main = () => {
  // Filter
  const [filter, setFilter] = useState("All");

  // Toggle Task
  const toggleTaskCompleted = (id) => {
    const toggleTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setData(toggleTask);
    setTasks(toggleTask);
  };

  // Edit Task
  const editTaskCompleted = (id, newName) => {
    const editTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }

      return task;
    });

    setData(editTask);
    setTasks(editTask);
  };

  // Delete Task
  const deleteTaskCompleted = (id) => {
    const deleteTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setData(deleteTask);
    setTasks(deleteTask);
  };

  // Generate task
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todoList"))
  );

  const tasksList = tasks.filter(FilterMap[filter]).map((task) => (
    <TodoList
      key={task.id}
      task={task}
      toggleTaskCompleted={toggleTaskCompleted}
      editTaskCompleted={editTaskCompleted}
      deleteTaskCompleted={deleteTaskCompleted}
    />
  ));

  return (
    <Wraaper>
      <Title />
      <Form setData={setData} tasks={tasks} setTasks={setTasks} />
      <FilterButton FilterNames={FilterNames} filter={filter} setFilter={setFilter} />
      <ListLength>Total: {tasksList.length} need To DO!</ListLength>
      <List>{tasksList}</List>
    </Wraaper>
  );
};

export default Main;