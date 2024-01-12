import React from "react";
import Task from "./Task";
import { useChoreChampion } from "../context/ChoreChampionContext";
import { Droppable } from "react-beautiful-dnd";

const TaskList = () => {
    const { tasks, reorderTasks } = useChoreChampion();

    const handleDragEnd = (result) => {
        const { source, destination } = result;

        console.log(result);

        if (!destination) return;

        reorderTasks(source.index, destination.index);
    };

    const droppableId = "task-list-" + Date.now().toString();

    return (
        <Droppable droppableId={droppableId} direction="vertical">
            {(provided) => (
                <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
                    {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                    ))}
                </div>        
            )}
        </Droppable> 
    );
}

export default TaskList;