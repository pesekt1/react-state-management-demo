import { Dispatch, createContext, useContext } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

export const TasksContext = createContext<TasksContextType>(
  {} as TasksContextType
);

const useTasks = () => useContext(TasksContext);

export default useTasks;
