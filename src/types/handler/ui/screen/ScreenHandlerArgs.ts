type ScreenHandlerArgs<S extends StoreWrapper<S> = StoreWrapper> = {
	/**
	 * If undefined in handler won't be passed here
	 */
	readonly state?: S
	/**
	 * /library/1
	 */
	readonly path: string
	/**
	 * /library/:id
	 */
	readonly pattern: string
}

export default ScreenHandlerArgs
