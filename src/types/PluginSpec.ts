import PluginConfig from "./PluginConfig";
import Handler from "./handler/base/Handler";

export default interface PluginSpec {
	readonly config: PluginConfig
	readonly onLoad: () => Promise<void>
	readonly onUnload: () => Promise<void>
	readonly handlers: Map<string, Handler>
}
