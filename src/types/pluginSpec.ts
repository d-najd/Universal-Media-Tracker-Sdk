import PluginConfig from "./pluginConfig";
import Handler from "./handler/base/handler";

export default interface PluginSpec {
	readonly config: PluginConfig
	readonly onLoad: () => Promise<void>
	readonly onUnload: () => Promise<void>
	readonly handlers: Map<string, Handler>
}
