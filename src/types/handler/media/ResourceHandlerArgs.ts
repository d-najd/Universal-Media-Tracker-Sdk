import BaseHandlerArgs from "../base/BaseHandlerArgs";
import ResourceExtra from "./ResourceExtra";

type ResourceHandlerArgs = BaseHandlerArgs & {
    // If string it is text between
    readonly extra?: ResourceExtra | string[]
}

export default ResourceHandlerArgs