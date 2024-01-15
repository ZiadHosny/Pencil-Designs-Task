import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { defaultTasks } from "../../utils/constants";
import { Task } from "../../utils/types";

const initialState: { tasks: Task[] } =
{
  tasks: defaultTasks
}


const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    removeTask(state, action) {
      const newTasksList = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = newTasksList;
    },
    toggleTaskCompleted(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const currTask = state.tasks.find((task) => task.id === taskId)!;

      currTask.completed = !currTask.completed;
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
