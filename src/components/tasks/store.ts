import { create } from "zustand";

interface Task {
  id: number;
  title: string;
}

interface TaskStore {
  tasks: Task[];
  add: (task: Task) => void;
  remove: (taskId: number) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  add: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  remove: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));

export default useTaskStore;
