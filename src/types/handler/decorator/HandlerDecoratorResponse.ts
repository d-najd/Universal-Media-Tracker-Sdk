import { Handler } from "../../.."

type HandlerDecoratorResponse = {
	/**
    * The decorated handler, by default all handlers after loading of the decorator are passed, and for these other handlers
    * just return the handler in the passed args without modification
	 */
	readonly handler: Handler
}

export default HandlerDecoratorResponse
