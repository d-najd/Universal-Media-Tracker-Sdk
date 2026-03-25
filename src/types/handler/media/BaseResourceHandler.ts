import BaseHandlerArgs from "../base/BaseHandlerArgs";
import BaseHandlerResponse from "../base/BaseHandlerResponse";
import ResourceType from "./ResourceType";
import BaseHandler from "../base/BaseHandler";

type BaseResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseHandler<T, R> & {
	name?: string
	resourceType?: ResourceType | string
}

export default BaseResourceHandler
