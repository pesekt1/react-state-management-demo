import { LoginStatus } from "./auth";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks";
import useTaskStore from "./tasks/store";

const NavBar = () => {
  const { tasks } = useTaskStore();
  const { count } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">Tasks: {tasks.length}</span>
      <span className="badge text-bg-secondary">Count: {count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
