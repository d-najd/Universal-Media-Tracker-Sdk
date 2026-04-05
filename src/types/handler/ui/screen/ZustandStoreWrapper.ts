import {create, StoreApi, UseBoundStore} from "zustand";

export type ZustandStoreWrapper<S> = UseBoundStore<StoreApi<S>> & StoreWrapper<S>

export function createZustandStoreWrapper<S>(initial: S): ZustandStoreWrapper<S> {
    const store = create<S>(() => initial)

    // Black magic
    const hook = ((selector?: (state: S) => any) => {
        if (!selector) return store.getState()
        return selector(store.getState())
    }) as ZustandStoreWrapper<S>

    hook.getState = store.getState
    hook.setState = store.setState
    hook.subscribe = store.subscribe

    return hook
}