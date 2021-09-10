import { Grid } from "@material-ui/core";
import React from "react";
import TodoItem from "./TodoItem";
import { getTodos } from "./../redux/todosSelectors";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector(getTodos);

  return (
    <Grid container spacing={2} component="ul">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </Grid>
  );
}
