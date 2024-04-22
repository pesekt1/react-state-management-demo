import { LoginStatus } from "./auth";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks";

const NavBar = () => {
  const { tasks } = useTasks();
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
