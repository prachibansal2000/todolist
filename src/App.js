import "./App.css";
import Header from "./Header";
import Task from "./Tasks";
import { useState } from "react";
import AddTask from "./AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doc",
      day: "wed",
      reminder: true,
    },
    {
      id: 2,
      text: "vet",
      day: "mon",
      reminder: true,
    },
    {
      id: 3,
      text: "grocery",
      day: "tue",
      reminder: false,
    },
  ]);
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        title="Task Manager"
        onAddToggle={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task"
      )}
    </div>
  );
}

export default App;
