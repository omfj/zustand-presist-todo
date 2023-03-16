import { useTodoStore } from "@/stores/todo";
import { useState } from "react";

const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
  });

  return (
    <>
      <p className="text-2xl font-bold">Create a todo</p>

      <div className="flex flex-col gap-5">
        <div className="form-control">
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input
            id="title"
            className="input input-bordered"
            value={formValues.title}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                title: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body" className="label">
            Body:
          </label>
          <textarea
            id="body"
            className="textarea textarea-bordered"
            value={formValues.body}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                body: e.target.value,
              });
            }}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            addTodo(formValues);
            setFormValues({
              title: "",
              body: "",
            });
          }}
        >
          Add to todo
        </button>
      </div>
    </>
  );
};

export default TodoForm;
