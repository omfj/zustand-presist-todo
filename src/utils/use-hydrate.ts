import { useEffect, useState } from "react";

/**
 * Returns the store state when it's ready, otherwise returns "loading"
 * @param storeState
 * @returns value of store state or "loading"
 */
export const useHydrate = <T>(storeState: T): T | undefined => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    setState(storeState);
  }, [storeState]);

  return state ?? undefined;
};
