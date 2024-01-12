import React from "react";
import TaskList from "./components/TaskList";
import { ChoreChampionProvider, useChoreChampion } from "./context/ChoreChampionContext";
import { DragDropContext } from "@hello-pangea/dnd";
import NewTaskInput from "./components/NewTaskInput";

const App = () => {

  const { handleDragEnd } = useChoreChampion();

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <AppContent />            
    </DragDropContext>
        
  )
}

const AppContent = () => {
  return (
    <div className="container">
      <h1>Chore Champion</h1>

      <TaskList />

      <NewTaskInput />
    </div>
  )
}

export default App;