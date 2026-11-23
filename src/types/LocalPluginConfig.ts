import PluginConfig from "./PluginConfig"

/**
* The persisted manifest on the disk after the app has touched it
*/
type LocalPluginConfig = PluginConfig & {
   /**
   * Whether the plugin is enabled or disabled 
   */
	readonly status: "enabled" | "disabled"
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
	readonly loadedFrom: "plugin-factory" | "plugin-source"
   /**
   * Pre-computed based on what handlers are in the plugin, or user defined in {PluginConfig}
   *
   * @example if there is plugin factory plugin and if priority is not set then it should be -20000
   */
   readonly priority: number
}

export default LocalPluginConfig
