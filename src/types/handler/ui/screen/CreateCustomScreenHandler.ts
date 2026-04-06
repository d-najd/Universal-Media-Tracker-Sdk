import BaseHandler from '../../base/BaseHandler'
import ScreenHandlerArgs from './ScreenHandlerArgs'
import ScreenHandlerResponse from './ScreenHandlerResponse'

type CreateCustomScreenHandler<S extends StoreWrapper<S>> = BaseHandler<
	ScreenHandlerArgs<S>,
	ScreenHandlerResponse
> & {
	/**
	 * /library/:id
	 */
	readonly pattern: string
	/**
	 * If undefined screen state won't be stored
	 */
	readonly initialState?: S
}

export default CreateCustomScreenHandler
