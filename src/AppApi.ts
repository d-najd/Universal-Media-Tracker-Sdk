import Handler from './types/handler/base/Handler'
import Navigator from './navigator/Navigator'
import LocalPluginConfig from './types/LocalPluginConfig'

export default interface AppApi {
	plugin: AppPluginsApi
	ui: AppUIApi
}

export interface AppPluginsApi {
	getLocalPluginConfigs(): LocalPluginConfig[]
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
	/**
	 * Works like a stack
	 */
	navigator: Navigator
}
