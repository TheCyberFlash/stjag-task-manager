import React from "react";
import { useChoreChampion } from "../context/ChoreChampionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
    const { completeTask, deleteTask } = useChoreChampion();

    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} 
                    className={`task-item ${task.completed ? "completed" : ""}`}
                >
                    <p>{task.title}</p>

                    <div className="button-group">
                        <button onClick={() => completeTask(task.id)}>
                            {task.completed ? <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> : <FontAwesomeIcon icon={faCheck} />}
                        </button>

                        <button onClick={() => deleteTask(task.id)}>
                            <FontAwesomeIcon icon={faTimes} style={{color: "red"}} />
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Task;