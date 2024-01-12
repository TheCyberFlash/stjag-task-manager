import React from "react";
import Task from "./Task";
import { useChoreChampion } from "../context/ChoreChampionContext";
import { Droppable } from "@hello-pangea/dnd";

const TaskList = () => {
    const { tasks } = useChoreChampion();    

    const droppableId = "task-list-" + Date.now().toString();

    return (
        <Droppable droppableId={droppableId} direction="vertical">
            {(provided) => (
                <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
                    {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                </div>        
            )}
            
        </Droppable> 
    );
}

export default TaskList;