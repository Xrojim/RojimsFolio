"use client";

import { useSyncExternalStore } from "react";

// The value never changes after hydration, so there is nothing to subscribe to.
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns false while rendering on the server and during hydration, then true.
 *
 * Use it to gate UI that would otherwise cause a hydration mismatch, such as
 * anything derived from the resolved theme. Prefer this over the
 * `useState(false)` + `useEffect(() => setMounted(true))` pattern, which
 * triggers a cascading render and is flagged by react-hooks/set-state-in-effect.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
