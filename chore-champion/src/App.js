import React from "react";
import TaskList from "./components/TaskList";
import { ChoreChampionProvider } from "./context/ChoreChampionContext";
import { DragDropContext } from "@hello-pangea/dnd";
import NewTaskInput from "./components/NewTaskInput";

const App = () => {
  return (
    <ChoreChampionProvider>
          <DragDropContext>
            <AppContent />            
          </DragDropContext>
        </ChoreChampionProvider>
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