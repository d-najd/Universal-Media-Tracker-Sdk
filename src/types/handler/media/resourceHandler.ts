import BaseHandlerArgs from "../base/baseHandlerArgs";
import BaseHandlerResponse from "../base/baseHandlerResponse";
import Handler from "../base/handler";
import ResourceHandlerType from "./resourceHandlerType";
import ResourceType from "./resourceType";

type ResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = Handler<T, R> & {
	/**
	 * Displayed in the app
	 */
	name: string
	type: ResourceHandlerType | string
	resourceType: ResourceType | string
}

export default ResourceHandler
