import MetaPreview from './MetaPreview'
import ResourceHandlerResponse from '../ResourceHandlerResponse'

type CatalogHandlerResponse<R extends MetaPreview = MetaPreview> = ResourceHandlerResponse<R> & {}

export default CatalogHandlerResponse
