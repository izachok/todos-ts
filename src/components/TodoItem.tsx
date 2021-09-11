import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
} from "@material-ui/core";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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
          <Checkbox
            checked={item.completed}
            onClick={() => dispatch(todosActions.toggleCompleted(item.id!))}
          ></Checkbox>
          {item.text}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => dispatch(todosActions.deleteTodo(item.id!))}
          >
            <HighlightOffIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
