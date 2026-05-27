import Handler from './types/handler/base/Handler'
import Navigator from './navigator/Navigator'

export default interface AppApi {
	plugins: AppPluginsApi
	ui: AppUIApi
}

export interface AppPluginsApi {
	getHandlersMatching(condition: (entry: Handler) => boolean): Handler[]

	/**
	 * key is id of the plugin
	 * @param condition key is pluginId, value is handler
	 */
	getHandlersMatchingWithPluginId(
		condition: (entry: [string, Handler]) => boolean
	): Map<string, Handler[]>

	invokeCallbackOnHandler<T, R>(id: string, args: T): Promise<R>
}

export interface AppUIApi {
	navigator: Navigator
}
