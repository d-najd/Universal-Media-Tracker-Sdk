import ResourceType from './ResourceType'
import BaseResourceHandler from './BaseResourceHandler'
import Handler from '../base/Handler'
import HandlerTypes from '../base/HandlerTypes'
import ResourceHandlerArgs from './ResourceHandlerArgs'
import ResourceHandlerResponse from './ResourceHandlerResponse'

type ResourceHandler<
	T extends ResourceHandlerArgs = ResourceHandlerArgs,
	R extends ResourceHandlerResponse = ResourceHandlerResponse
> = BaseResourceHandler<T, R> &
	Handler<T, R> & {
		/**
		 * Displayed in the app
		 */
		readonly name: string
		readonly type: HandlerTypes | string
		readonly resourceType: ResourceType | string
	}

export default ResourceHandler
