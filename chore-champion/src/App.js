import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { ChoreChampionProvider, useChoreChampion } from "./context/ChoreChampionContext";
import Task from "./components/Task";

const App = () => {
  return (
    <ChoreChampionProvider>
      <AppContent />
    </ChoreChampionProvider>
  )
}

const AppContent = () => {
  const [newTask, setNewTask] = useState("");
  const {tasks, addTask} = useChoreChampion();

  const handleAddTask = (event) => {
    event.preventDefault();

    if (newTask.trim !== "") {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask(event);
    }
  };

  return (
    <div className="container">
      <h1>Chore Champion</h1>

      <TaskList />

      <div>
        <input 
          type="text" 
          placeholder="Enter a enw task" 
          value={newTask} 
          onChange={(event) => setNewTask(event.target.value)} 
          onKeyDown={handleKeyDown} 
        />

        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  )
}

export default App;