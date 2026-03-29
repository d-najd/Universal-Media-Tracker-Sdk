import TriState from "../../TriState";

type ResourceExtraArgs = {
    readonly name: string,
    /**
     * @see ResourceExtra
     */
    readonly input: string | number | string[] | ('asc' | 'desc') | TriState | TriState[]
}

export default ResourceExtraArgs
