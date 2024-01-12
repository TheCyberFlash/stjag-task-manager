import React, { createContext, useContext, useState, useEffect } from "react";
import PopupModal from "../components/PopupModal";

const ChoreChampionContext = createContext();

export const ChoreChampionProvider = ({ children }) => {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(savedTasks);
    const [showModal, setShowModal] = useState(false);
    const [modelAction, setModalAction] = useState(null);
    const [taskIdToDelete, setTaskIdToDelete] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        const newTask = { id: Date.now(), title};

        setTasks([...tasks, newTask]);
    };

    const completeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (taskId) => {
        setTaskIdToDelete(taskId);
        setModalAction("delete");
        setShowModal(true);
    };

    const handleConfirm = () => {
        if (modelAction === "delete") {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskIdToDelete));
        }

        setShowModal(false);
        setTaskIdToDelete(null);
        setModalAction(null);
    }

    const handleCancel = () => {
        setShowModal(false);
        setTaskIdToDelete(null);
        setModalAction(null);
    };

    return (
        <ChoreChampionContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
            {children}
            {showModal && <PopupModal message={`Are you sure you want to ${modelAction} this "${tasks.find((task) => task.id === taskIdToDelete)?.title}"?`} onConfirm={handleConfirm} onCancel={handleCancel} />}
        </ChoreChampionContext.Provider>
    );
};

export const useChoreChampion = () => {
    const context = useContext(ChoreChampionContext);

    if (!context) {
        throw new Error("useChoreChampion must be used within a ChoreChampionProvider");
    }

    return context;
};