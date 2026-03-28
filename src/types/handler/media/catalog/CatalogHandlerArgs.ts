import BaseHandlerArgs from "../../base/BaseHandlerArgs";

type CatalogHandlerArgs = BaseHandlerArgs & {
    readonly pageSize: number
}

export default CatalogHandlerArgs
