import { Field, Form, Formik, FormikHelpers } from "formik";

import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { todosActions } from "../redux/todosSlice";
import { useDispatch } from "react-redux";

interface Values {
  text: string;
}

export default function TodoForm() {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          dispatch(
            todosActions.addTodo({ text: values.text, completed: false })
          );
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              id="text"
              name="text"
              placeholder="To do..."
              component={TextField}
            />
            <Button type="submit" disabled={isSubmitting} variant="contained">
              Add todo
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
