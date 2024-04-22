import "./App.css";
import HomePage from "./components/HomePage";
import LoginStatus from "./components/LoginStatus";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <h1>React State Management Demo</h1>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
