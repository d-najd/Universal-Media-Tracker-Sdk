import BaseHandlerArgs from "../base/BaseHandlerArgs";
import {ResourceBrowseOptionArgs} from "../../../index";

type ResourceHandlerArgs = BaseHandlerArgs & {
    readonly browseOptions?: ResourceBrowseOptionArgs[]
}

export default ResourceHandlerArgs