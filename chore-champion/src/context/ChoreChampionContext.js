import React, { createContext, useContext, useState, useEffect } from "react";

const ChoreChampionContext = createContext();

export const ChoreChampionProvider = ({ children }) => {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(savedTasks);

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
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <ChoreChampionContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
            {children}
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