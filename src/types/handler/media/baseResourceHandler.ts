import BaseHandlerArgs from "../base/baseHandlerArgs";
import BaseHandlerResponse from "../base/baseHandlerResponse";
import ResourceType from "./resourceType";
import BaseHandler from "../base/baseHandler";

type BaseResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseHandler<T, R> & {
	name?: string
	resourceType?: ResourceType | string
}

export default BaseResourceHandler
