import BaseHandlerArgs from "../base/BaseHandlerArgs";
import BaseHandlerResponse from "../base/BaseHandlerResponse";
import ResourceType from "./ResourceType";
import BaseResourceHandler from "./BaseResourceHandler";
import Handler from "../base/Handler";
import HandlerTypes from "../base/HandlerTypes";

type ResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseResourceHandler<T, R> & Handler<T, R> & {
	/**
	 * Displayed in the app
	 */
	readonly name: string
	readonly type: HandlerTypes | string
	readonly resourceType: ResourceType | string
}

export default ResourceHandler
