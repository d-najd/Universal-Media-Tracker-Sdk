import BaseHandlerArgs from "../base/baseHandlerArgs";
import BaseHandlerResponse from "../base/baseHandlerResponse";
import ResourceType from "./resourceType";
import BaseResourceHandler from "./baseResourceHandler";
import Handler from "../base/handler";
import HandlerTypes from "../base/handlerTypes";

type ResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseResourceHandler<T, R> & Handler<T, R> & {
	/**
	 * Displayed in the app
	 */
	name: string
	type: HandlerTypes | string
	resourceType: ResourceType | string
}

export default ResourceHandler
