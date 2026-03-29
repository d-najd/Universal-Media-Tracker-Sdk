import BaseResourceHandler from "./BaseResourceHandler";
import ResourceType from "./ResourceType";
import HandlerTypes from "../base/HandlerTypes";
import ResourceHandlerArgs from "./ResourceHandlerArgs";
import ResourceHandlerResponse from "./ResourceHandlerResponse";

type CreateResourceHandler<
    T extends ResourceHandlerArgs = ResourceHandlerArgs,
    R extends ResourceHandlerResponse = ResourceHandlerResponse
> = BaseResourceHandler<T, R> & {
    readonly type: HandlerTypes | string,
    readonly resourceType: ResourceType | string
}

export default CreateResourceHandler