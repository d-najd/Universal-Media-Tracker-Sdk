import BaseHandlerArgs from "../base/BaseHandlerArgs";
import BaseHandlerResponse from "../base/BaseHandlerResponse";
import BaseResourceHandler from "./BaseResourceHandler";
import ResourceType from "./ResourceType";
import HandlerTypes from "../base/HandlerTypes";

type CreateResourceHandler<
    T extends BaseHandlerArgs = BaseHandlerArgs,
    R extends BaseHandlerResponse = BaseHandlerResponse
> = BaseResourceHandler<T, R> & {
    type: HandlerTypes | string,
    resourceType: ResourceType | string
}

export default CreateResourceHandler