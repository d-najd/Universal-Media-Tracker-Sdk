import Navigator from '../../../../navigator/Navigator'

type ScreenHandlerArgs<S extends StoreWrapper<S>> = {
	/**
	 * If undefined in handler won't be passed here
	 */
	readonly state?: S
	readonly navigator: Navigator
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
