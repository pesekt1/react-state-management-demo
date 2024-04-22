import { useReducer } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import TasksContext from "./contexts/TasksContext";
import tasksReducer from "./reducers/tasksReducer";
import AuthContext from "./contexts/AuthContext";
import authReducer from "./reducers/authReducer";

function App() {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, []);
  const [user, dispatchAuth] = useReducer(authReducer, "");

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch: dispatchTasks }}>
        <AuthContext.Provider value={{ user, dispatch: dispatchAuth }}>
          <h1>React State Management Demo</h1>
          <NavBar />
          <HomePage />
        </AuthContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default App;
