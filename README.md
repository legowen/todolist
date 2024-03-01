# JustPlan ToDo Project 🧑🏻‍💻

This is my personal To-Do List project created using JavaScript, React, and Styled Components.

You can check today's date and add tasks by entering them, which activates the "Add" button to add them to the to-do list.

The added tasks can be viewed with the total count, and you can also edit and delete them. Additionally, clicking on the task text allows you to toggle between Complete and incomplete states.

Finally, users can easily manage their tasks using the "All", "Done", and "ToDo" buttons.

1. Utilizing Figma (Design Tool)

- Creating layouts and designs

2. Utilizing JavaScript

- Write code to display the current date.
- Create initial data, save it to local storage, and retrieve it.
- Receive parameters necessary for initial data reflection, to-do list addition, modification, deletion, etc., and distinguish them using if statements, updating them using spread operators, etc.

3. Utilizing React

- Design the content as components to manage and reuse components effectively.
- Use Array.filter and Array.map to repeat components and output only the desired components through filter buttons.
- Use useState and Props to update values needed for adding, deleting, modifying, etc., to-do lists.
- Use useRef and useEffect to access input tags and give them focusing effects.
- Apply CSS effects to className and disabled attributes using ternary operators.

4. Utilizing Styled Components

- Use Styled Components to set Reset CSS and perform CSS and responsive work.

## Preview of Completed Project

Demo : https://justplan.netlify.app

## Tech Stack

- Complete the site using ![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23FDF1C&color=%23FFCE5A) and ![React](https://img.shields.io/badge/-React-222222?style=for-the-badge&logo=react).
- Manage ![CSS3](https://img.shields.io/badge/-CSS3-007ACC?style=for-the-badge&logo=css3) using Styled-Components.
- Manage files using ![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=ffffff) and ![Github](https://img.shields.io/badge/-github-121013?style=for-the-badge&logo=github&logoColor=white).
- Package code, files, images, CSS files, etc., through build.

## Running and Finishing the Project

- Install React: `npx create-react-app title` || `create-react-app .(current folder)`
- Install Styled-Components:  `npm install styled-components`
- Create files for deployment environment: `npm run build`
- Create a static file serving program: `npm install -g serve (accessible in all paths on the current computer)`
- Serve the web application based on the build folder: `serve -s build`

## References for the Project

1. Save and retrieve from local storage (https://studyingych.tistory.com/28)
2. Setting up Styled Component Reset CSS (https://lakelouise.tistory.com/319)

## Learned from the Project

### JavaScript

1. Creating initial data and utilizing local storage.

```
  const seedData = () => {
    const seed = [
      { id: "list1", name: "MovieDB Logo Opt", completed: true },
      { id: "list2", name: "Assembling LEGO", completed: false },
      { id: "list3", name: "VUE Study", completed: false },
      { id: "list3", name: "Soccer Practice 8pm-9pm", completed: false },
    ];

    setData(seed);
  };

  const setData = (seed) => {
    localStorage.setItem("todoList", JSON.stringify(seed));
  };

  if (!JSON.parse(localStorage.getItem("todoList"))) {
    seedData();
  }
```

2. Adding, toggling, modifying, and deleting initial data.

```
  // Add
  const addTask = (name) => {
    const newTask = { id: `list-${new Date()}`, name, completed: false };
    const newTasks = [...tasks, newTask];

    setData(newTasks);
    setTasks(newTasks);
  };

  // Toggle
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

  // Edit
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

  // Delete
  const deleteTaskCompleted = (id) => {
    const deleteTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setData(deleteTask);
    setTasks(deleteTask);
  };
```

### Styled-Component

1. Writing "Reset CSS" in "GlobalStyles."

```
  // Reference : Import createGlobalStyle (insert into GlobalStyles.js)
  import { createGlobalStyle } from "styled-components";

  //  Reference: Import GlobalStyles (insert into index.js)
  import GlobalStyles from "./styles/GlobalStyles";
```

2. Responsive code with Styled-Components.

```
  export const Wraaper = styled.div`
    width: 500px;
    height: 600px;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  `;
```

### React

1. Utilizing filter, map, Props.

```
  // filter data
  const FilterMap = {
    All : () => true,
    Done :  (task) => task.completed,
    ToDo : (task) => !task.completed
  }

  // taskList component with props for task list, toggle, edit, and delete, and filter list creation.
  const tasksList = tasks.filter(FilterMap[filter]).map((task) => (
    <TodoList
      key={task.id}
      task={task}
      toggleTaskCompleted={toggleTaskCompleted}
      editTaskCompleted={editTaskCompleted}
      deleteTaskCompleted={deleteTaskCompleted}
    />
  ));
```

## What I got from this project

As this was my first solo project, there were many areas where I felt inexperienced.
I initially wanted to simplify the App.js file by putting functions related to toggling, editing, and deleting inside the TodoList component.
However, as I was using setState to update the state, the code became longer, so I decided not to implement it.
Later, I learned that it is better not to distribute the code that reflects the overall flow of the project into each component.
This project gave me the opportunity to reconsider this aspect and think about it more deeply. 
