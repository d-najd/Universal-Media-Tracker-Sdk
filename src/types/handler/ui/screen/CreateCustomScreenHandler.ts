import BaseHandler from '../../base/BaseHandler'
import ScreenHandlerArgs from './ScreenHandlerArgs'
import ScreenHandlerResponse from './ScreenHandlerResponse'

type CreateCustomScreenHandler<S extends StoreWrapper<S> = StoreWrapper> = Omit<
	BaseHandler<ScreenHandlerArgs<S>, ScreenHandlerResponse>,
	'callback'
> & {
	/**
	 * /library/:id
	 */
	readonly pattern: string
	/**
	 * If undefined screen state won't be stored
	 */
	readonly initialState?: S

	readonly callback: (args: ScreenHandlerArgs<S>) => ScreenHandlerResponse
}

export default CreateCustomScreenHandler
