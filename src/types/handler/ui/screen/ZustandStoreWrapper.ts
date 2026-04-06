import {create, StoreApi, UseBoundStore} from "zustand";

export type ZustandStoreWrapper<S = any> = UseBoundStore<StoreApi<S>> & StoreWrapper<S>

export function createZustandStoreWrapper<S>(initial: S): ZustandStoreWrapper<S> {
    const store = create<S>(() => initial)

    // Black magic
    const hook = ((selector?: (state: S) => any) => {
        if (!selector) return store.getState()
        return selector(store.getState())
    }) as ZustandStoreWrapper<S>

    hook.getStateFromWrapper = store.getState
    hook.setStateFromWrapper = store.setState
    hook.subscribe = store.subscribe

    return hook
}
