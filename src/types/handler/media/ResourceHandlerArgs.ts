import BaseHandlerArgs from "../base/BaseHandlerArgs";
import {ResourceBrowseOptionArgs} from "../../../index";

type ResourceHandlerArgs = BaseHandlerArgs & {
    readonly options?: ResourceBrowseOptionArgs[]
}

export default ResourceHandlerArgs