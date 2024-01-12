import React from "react";
import { useChoreChampion } from "../context/ChoreChampionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
    const { completeTask, deleteTask } = useChoreChampion();

    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
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
    )
}

export default Task;