import BaseResourceHandler from '../BaseResourceHandler'
import CatalogHandlerArgs from './CatalogHandlerArgs'
import CatalogHandlerResponse from './CatalogHandlerResponse'
import ResourceType from '../ResourceType'
import {MetaPreview} from "../../../../index";

type CreateCatalogHandler<R extends MetaPreview = MetaPreview> = BaseResourceHandler<
	CatalogHandlerArgs,
	CatalogHandlerResponse<R>
> & {
	readonly resourceType: ResourceType | string
}

export default CreateCatalogHandler
