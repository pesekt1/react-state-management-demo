import { ReactNode, useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./authReducer";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [user, dispatchAuth] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default TasksProvider;
