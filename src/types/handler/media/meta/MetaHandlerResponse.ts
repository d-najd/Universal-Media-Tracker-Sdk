import Meta from "./Meta"
import ResourceHandlerResponse from "../ResourceHandlerResponse"

type MetaHandlerResponse<R extends Meta = Meta> =
	ResourceHandlerResponse<R> & {}

export default MetaHandlerResponse
