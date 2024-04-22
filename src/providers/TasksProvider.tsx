import { ReactNode, useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";
import TasksContext from "../contexts/TasksContext";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: dispatchTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
