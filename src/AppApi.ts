import DirStorage from "./storage/directory-storage/DirStorage"
import IdStorage from "./storage/id-storage/IdStorage"
import Handler from "./types/handler/base/Handler"
import LocalPluginConfig from "./types/LocalPluginConfig"

export default interface AppApi {
	plugin: AppPluginsApi
	storage: StorageApi
}

export interface AppPluginsApi {
	getLocalPluginConfigs(): LocalPluginConfig[]
	getHandlersMatching(condition: (entry: Handler) => boolean): Handler[]

	/**
	 * key is id of the plugin
	 * @param condition key is pluginId, value is handler
	 */
	getHandlersMatchingWithPluginId(
		condition: (entry: [string, Handler]) => boolean,
	): Map<string, Handler[]>

	invokeCallbackOnHandler<T, R>(id: string, args: T): Promise<R>
}

export interface StorageApi {
	/**
	 * Path-based storage for arbitrary app data, configs, logs, etc.
	 */
	paths: DirStorage

	/**
	 * ID-based storage for media entities with multiple aliases.
	 */
	media: IdStorage
}
