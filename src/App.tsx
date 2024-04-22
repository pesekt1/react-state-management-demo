import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import TasksProvider from "./providers/TasksProvider";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <>
      <TasksProvider>
        <AuthProvider>
          <h1>React State Management Demo</h1>
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TasksProvider>
    </>
  );
}

export default App;
