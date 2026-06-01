import PluginConfig from './PluginConfig'

type LocalPluginConfig = PluginConfig & {
	readonly status: 'enabled' | 'disabled'
	readonly url: string
	/**
	 * ID of the handler this was handled with
	 */
	readonly handlerId: string
	/**
	 * ID of the plugin that the handler belongs to
	 * Planned to be used with plugin-factory to warn the user if the factory is
	 * removed
	 */
	readonly handlerPluginId: string
	readonly loadedFrom: 'plugin-factory' | 'plugin-source'
}

export default LocalPluginConfig
