import TriState from "../../../TriState";
import ResourceBrowseOptionDefaults from "./ResourceBrowseOptionDefaults";

type ResourceBrowseOptionArgs = {
    readonly name: ResourceBrowseOptionDefaults | string,
    /**
     * @see ResourceExtra
     */
    readonly input: string | number | string[] | ('asc' | 'desc') | TriState | TriState[]
}

export default ResourceBrowseOptionArgs
