import ResourceType from "./ResourceType"
import BaseResourceHandler from "./BaseResourceHandler"
import Handler from "../base/Handler"
import ResourceHandlerArgs from "./ResourceHandlerArgs"
import ResourceHandlerResponse from "./ResourceHandlerResponse"
import HandlerType from "../base/HandlerType"

type ResourceHandler<
	T extends ResourceHandlerArgs = ResourceHandlerArgs,
	R extends ResourceHandlerResponse = ResourceHandlerResponse,
> = BaseResourceHandler<T, R> &
	Handler<T, R> & {
		/**
		 * Displayed in the app
		 */
		readonly name: string
		readonly type: HandlerType | string
		readonly resourceType: ResourceType | string
	}

export default ResourceHandler
