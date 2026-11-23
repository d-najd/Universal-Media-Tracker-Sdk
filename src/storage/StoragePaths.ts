export const pluginsDir = "plugins"
export const pluginsManifestFileName = "manifest.json"
export const pluginLocalConfigFileName = "config.json"
export const pluginBundleFileName = "index.js"

export const pluginDirPath = (pluginId: string) =>
	`${pluginsDir}/${pluginId}`

export const pluginLocalConfigFilePath = (pluginId: string) =>
	`${pluginDirPath(pluginId)}/${pluginLocalConfigFileName}`

export const pluginBundleFilePath = (pluginId: string) =>
	`${pluginDirPath(pluginId)}/${pluginBundleFileName}`

export const pluginsManifestFilePath = () =>
	`${pluginsDir}/${pluginsManifestFileName}`
