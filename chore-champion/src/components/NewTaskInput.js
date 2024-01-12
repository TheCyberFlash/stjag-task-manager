import React, { useState } from "react";
import { useChoreChampion } from "../context/ChoreChampionContext";

const NewTaskInput = () => {
    const [newTask, setNewTask] = useState('');
    const { addTask } = useChoreChampion();
  
    const handleAddTask = (event) => {
      event.preventDefault();
  
      if (newTask.trim() !== '') {
        addTask(newTask.trim());
        setNewTask('');
      }
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleAddTask(event);
      }
    };
  
    return (
      <div className="new-task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };
  
  export default NewTaskInput;