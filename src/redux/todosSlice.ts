import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TodoType } from "../types/types";

const initialState: TodoType[] = [
  {
    id: 1,
    text: "Finish Typescript",
    dateTime: Date.now(),
    completed: false,
  },
  {
    id: 2,
    text: "Learn C#",
    dateTime: Date.now(),
    completed: false,
  },
  {
    id: 3,
    text: "Make ASP.NET project",
    dateTime: Date.now(),
    completed: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleCompleted: (state, action: PayloadAction<number>) =>
      state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      ),
  },
});

// Action creators are generated for each case reducer function
export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
