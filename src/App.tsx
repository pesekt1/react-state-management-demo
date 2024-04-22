import { useReducer } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import TasksContext from "./contexts/TasksContext";
import tasksReducer from "./reducers/tasksReducer";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <h1>React State Management Demo</h1>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
      <TaskList />
    </>
  );
}

export default App;
