import {create, StoreApi, UseBoundStore} from "zustand";

export type ZustandScreenStore<S> = UseBoundStore<StoreApi<S>> & ScreenStore<S>

export function createZustandScreenStore<S>(initial: S): ZustandScreenStore<S> {
    const store = create<S>(() => initial)

    // Black magic
    const hook = ((selector?: (state: S) => any) => {
        if (!selector) return store.getState()
        return selector(store.getState())
    }) as ZustandScreenStore<S>

    hook.getState = store.getState
    hook.setState = store.setState
    hook.subscribe = store.subscribe

    return hook
}