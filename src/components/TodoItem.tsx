import { Card, CardContent, Checkbox, Grid } from "@material-ui/core";

import React from "react";
import { TodoType } from "../types/types";
import { todosActions } from "../redux/todosSlice";
import { useDispatch } from "react-redux";

type PropsType = {
  item: TodoType;
};

export default function TodoItem({ item }: PropsType) {
  const dispatch = useDispatch();

  return (
    <Grid item component="li">
      <Card>
        <CardContent>
          {item.text}
          <Checkbox
            checked={item.completed}
            onClick={() => dispatch(todosActions.toggleCompleted(item.id!))}
          ></Checkbox>
        </CardContent>
      </Card>
    </Grid>
  );
}
