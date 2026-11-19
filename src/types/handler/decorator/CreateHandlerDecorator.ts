import BaseHandler from "../base/BaseHandler"
import HandlerDecoratorArgs from "./HandlerDecoratorArgs"
import HandlerDecoratorResponse from "./HandlerDecoratorResponse"

/**
* Decorates all the handlers after the decorator has been loaded (also prevents circular decoration),
* if handler shouldn't be decorated just return early
*/
type CreateHandlerDecorator<
	T extends HandlerDecoratorArgs = HandlerDecoratorArgs,
	R extends HandlerDecoratorResponse = HandlerDecoratorResponse,
> = BaseHandler<T, R> & {}

export default CreateHandlerDecorator
