import PluginConfig from "../types/PluginConfig"

export const pluginsPath = "plugins"
export const pluginConfigName = "config.json"
export const pluginFileName = "index.js"

export const curPluginPath = (pluginConfig: PluginConfig) => {
	return pluginsPath + "/" + pluginConfig.id
}

export const curPluginConfigPath = (pluginConfig: PluginConfig) => {
	return curPluginPath(pluginConfig) + "/" + pluginConfigName
}

export const curPluginFilePath = (pluginConfig: PluginConfig) => {
	return curPluginPath(pluginConfig) + "/" + pluginFileName
}
