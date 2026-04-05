type ScreenStore<T> = {
    getState(): T
    setState(state: T): void
}