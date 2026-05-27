import BaseHandler from '../../base/BaseHandler'
import ScreenHandlerArgs from './ScreenHandlerArgs'
import ScreenHandlerResponse from './ScreenHandlerResponse'

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type CreateCustomScreenHandler<S extends StoreWrapper<S> = StoreWrapper> =
	 BaseHandler<ScreenHandlerArgs<S>, ScreenHandlerResponse> & {
		/**
		 * /library/:id
		 */
		readonly pattern: string
		/**
		 * If undefined screen state won't be stored
		 */
		readonly initialState?: S
		readonly callbackSync: (
			args: ScreenHandlerArgs<S>
		) => ScreenHandlerResponse
	}

export default CreateCustomScreenHandler
