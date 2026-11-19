import BaseResourceHandler from "./BaseResourceHandler"
import ResourceType from "./ResourceType"
import ResourceHandlerArgs from "./ResourceHandlerArgs"
import ResourceHandlerResponse from "./ResourceHandlerResponse"
import HandlerType from "../base/HandlerType"

type CreateResourceHandler<
	T extends ResourceHandlerArgs = ResourceHandlerArgs,
	R extends ResourceHandlerResponse = ResourceHandlerResponse,
> = BaseResourceHandler<T, R> & {
	readonly type: HandlerType | string
	readonly resourceType: ResourceType | string
}

export default CreateResourceHandler
