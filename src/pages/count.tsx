import { useCountStore } from "@/stores/count";
import { useHydrate } from "@/utils/use-hydrate";

const CountPage = () => {
  const count = useHydrate(useCountStore((state) => state.count));
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  return (
    <div className="text-center -space-y-14">
      <h1 className="text-5xl font-bold mb-3">Current count is:</h1>
      <p className="text-[18rem] font-bold">{count}</p>
      <div className="flex flex-col md:flex-row gap-3 mx-auto w-fit">
        <button className="btn btn-primary" onClick={() => increment(1)}>
          Increment
        </button>
        <button className="btn btn-secondary" onClick={() => decrement(1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CountPage;
