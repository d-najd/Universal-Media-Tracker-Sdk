type StoreWrapper<T = any> = {
    getStateFromWrapper(): T
    setStateFromWrapper(state: T): void
}