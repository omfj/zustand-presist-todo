import { create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = {
  id: number;
  title: string;
  body: string;
  done: boolean;
};

type State = {
  todos: Array<Todo>;
};

type Actions = {
  addTodo: (todo: Omit<Todo, "id" | "done">) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const useTodoStore = create<State & Actions>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (todo) => {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              done: false,
              ...todo,
            },
          ],
        }));
      },

      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        }));
      },
    }),
    {
      name: "todos",
    }
  )
);
