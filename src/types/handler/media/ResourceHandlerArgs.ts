import BaseHandlerArgs from "../base/BaseHandlerArgs";
import ResourceBrowseOption from "./browse-option/ResourceBrowseOption";

type ResourceHandlerArgs = BaseHandlerArgs & {
    readonly browseOptions?: ResourceBrowseOption[]
}

export default ResourceHandlerArgs