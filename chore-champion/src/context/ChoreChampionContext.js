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

        reorderCompleteTask(taskId);
    };

    const reorderCompleteTask = (taskId) => {
        setTimeout(() => {
            const completeTaskIndex = tasks.findIndex((task) => task.id === taskId);
        const bottomIndex = tasks.length - 1;
        reorderTasks(completeTaskIndex, bottomIndex);
        }, 500);
    }

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

    const reorderTasks = (startIndex, endIndex) => {
        const updatedTasks = [...tasks];
        const [removedTask] = updatedTasks.splice(startIndex, 1);
        updatedTasks.splice(endIndex, 0, removedTask);
        setTasks(updatedTasks);
    };

    const handleDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        reorderTasks(source.index, destination.index);
    };

    return (
        <ChoreChampionContext.Provider value={{ tasks, addTask, completeTask, deleteTask, reorderTasks, handleDragEnd }}>
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