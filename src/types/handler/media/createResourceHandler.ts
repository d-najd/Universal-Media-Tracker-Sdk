import BaseHandlerArgs from "../base/baseHandlerArgs";
import BaseHandlerResponse from "../base/baseHandlerResponse";
import ResourceHandler from "./resourceHandler";

type CreateResourceHandler<
	T extends BaseHandlerArgs = BaseHandlerArgs,
	R extends BaseHandlerResponse = BaseHandlerResponse
> = Omit<ResourceHandler<T, R>, 'id' | 'name'> & {
	id?: string
	name?: string
}

export default CreateResourceHandler
