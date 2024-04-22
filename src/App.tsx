import { useReducer } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AuthContext from "./contexts/AuthContext";
import authReducer from "./reducers/authReducer";
import TasksProvider from "./providers/TasksProvider";

function App() {
  const [user, dispatchAuth] = useReducer(authReducer, "");

  return (
    <>
      <TasksProvider>
        <AuthContext.Provider value={{ user, dispatch: dispatchAuth }}>
          <h1>React State Management Demo</h1>
          <NavBar />
          <HomePage />
        </AuthContext.Provider>
      </TasksProvider>
    </>
  );
}

export default App;
