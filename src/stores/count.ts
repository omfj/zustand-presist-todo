import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
  persist(
    (set) => ({
      count: 0,
      increment: (qty: number) =>
        set((state) => ({ count: state.count + qty })),
      decrement: (qty: number) =>
        set((state) => ({ count: state.count - qty })),
    }),
    {
      name: "count",
    }
  )
);
