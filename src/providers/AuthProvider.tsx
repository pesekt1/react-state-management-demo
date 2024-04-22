import { ReactNode, useReducer } from "react";
import AuthContext from "../contexts/AuthContext";
import authReducer from "../reducers/authReducer";

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
