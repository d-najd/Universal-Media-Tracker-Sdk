type StoreWrapper<T> = {
    getState(): T
    setState(state: T): void
}