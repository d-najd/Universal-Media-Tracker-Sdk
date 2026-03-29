import BaseHandlerResponse from "../base/BaseHandlerResponse";

type ResourceHandlerResponse<T = any> = BaseHandlerResponse<T> & { }

export default ResourceHandlerResponse