import BaseHandlerArgs from "../base/BaseHandlerArgs";
import BaseHandlerResponse from "../base/BaseHandlerResponse";
import ResourceType from "./ResourceType";
import BaseHandler from "../base/BaseHandler";
import ResourceExtra from "./ResourceExtra";

type BaseResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseHandler<T, R> & {
	readonly name?: string
	readonly resourceType?: ResourceType | string,
	readonly extra?: ResourceExtra[]
}

export default BaseResourceHandler
