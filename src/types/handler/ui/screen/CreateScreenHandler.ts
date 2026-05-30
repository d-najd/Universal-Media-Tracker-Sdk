import BaseHandler from '../../base/BaseHandler'
import ScreenHandlerArgs from './ScreenHandlerArgs'
import ScreenHandlerResponse from './ScreenHandlerResponse'

type CreateScreenHandler = Omit<BaseHandler<ScreenHandlerArgs, ScreenHandlerResponse>, 'callback'> & {
	/**
	 * /library/:id
	 */
	readonly pattern: string

	readonly callback: (args: ScreenHandlerArgs) => ScreenHandlerResponse
}

export default CreateScreenHandler
