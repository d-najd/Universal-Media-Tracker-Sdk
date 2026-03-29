import ResourceType from "./ResourceType";
import BaseHandler from "../base/BaseHandler";
import ResourceExtra from "./ResourceExtra";
import ResourceHandlerArgs from "./ResourceHandlerArgs";
import ResourceHandlerResponse from "./ResourceHandlerResponse";

type BaseResourceHandler<
	T extends ResourceHandlerArgs = ResourceHandlerArgs,
	R extends ResourceHandlerResponse = ResourceHandlerResponse
> = BaseHandler<T, R> & {
	readonly name?: string
	readonly resourceType?: ResourceType | string,
	readonly extra?: ResourceExtra[]
}

export default BaseResourceHandler
