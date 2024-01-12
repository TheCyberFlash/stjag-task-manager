import React from "react";
import Task from "./Task";
import { useChoreChampion } from "../context/ChoreChampionContext";

const TaskList = () => {
    const { tasks } = useChoreChampion();

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;