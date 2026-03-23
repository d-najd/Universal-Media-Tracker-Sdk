import BaseHandlerArgs from "../base/baseHandlerArgs";
import BaseHandlerResponse from "../base/baseHandlerResponse";
import BaseResourceHandler from "./baseResourceHandler";
import ResourceType from "./resourceType";
import HandlerTypes from "../base/handlerTypes";

type CreateResourceHandler<
    T extends BaseHandlerArgs = BaseHandlerArgs,
    R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseResourceHandler<T, R> & {
    type: HandlerTypes | string,
    resourceType: ResourceType | string
}

export default CreateResourceHandler