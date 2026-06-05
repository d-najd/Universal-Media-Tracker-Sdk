import BaseResourceHandler from '../BaseResourceHandler'
import ResourceType from '../ResourceType'
import MetaHandlerArgs from './MetaHandlerArgs';
import MetaHandlerResponse from './MetaHandlerResponse';
import Meta from './Meta';

type CreateMetaHandler<R extends Meta = Meta> = BaseResourceHandler<
	MetaHandlerArgs,
	MetaHandlerResponse<R>
> & {
	readonly resourceType: ResourceType | string
}

export default CreateMetaHandler
