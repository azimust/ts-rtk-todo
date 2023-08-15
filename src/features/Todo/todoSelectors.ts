import { RootState } from "../../redux/store";

export const selectAllTodos = ((state: RootState) => state.todos)