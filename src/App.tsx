import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import TasksProvider from "./components/tasks/TasksProvider";
import AuthProvider from "./components/auth/AuthProvider";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <>
      <TasksProvider>
        <h1>React State Management Demo</h1>
        <NavBar />
        <HomePage />
      </TasksProvider>
      <Counter />
    </>
  );
}

export default App;
