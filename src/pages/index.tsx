import TodoForm from "@/components/todo-form";
import { useTodoStore } from "@/stores/todo";
import { useHydrate } from "@/utils/use-hydrate";
import { useCountStore } from "@/stores/count";

const Home = () => {
  const count = useHydrate(useCountStore((state) => state.count));

  const todos = useHydrate(useTodoStore((state) => state.todos));
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <>
      <h1 className="text-5xl font-bold mb-3">Zustand + React = 💘</h1>

      <div className="flex flex-col gap-3 mb-10">
        <p className="text-2xl">Count is: {count}</p>
      </div>

      <div className="mb-10">
        <TodoForm />
      </div>

      <div className="mb-10">
        <p className="text-2xl font-bold">Todo list</p>

        <div className="flex flex-col gap-2 divide">
          {todos?.length === 0 && <p>No todos yet</p>}
          {todos?.map((todo) => (
            <div className="card bg-base-100 shadow-xl p-5" key={todo.id}>
              <p className="text-2xl font-bold">{todo.title}</p>
              <hr />
              <p className="py-3">{todo.body}</p>
              <button
                className="btn btn-sm btn-error"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
