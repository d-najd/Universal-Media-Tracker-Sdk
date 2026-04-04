import PluginConfig from "./types/PluginConfig";
import Handler from "./types/handler/base/Handler";
import ResourceHandler from "./types/handler/media/ResourceHandler";
import CreateCatalogHandler from "./types/handler/media/catalog/CreateCatalogHandler";
import PluginSpec from "./types/PluginSpec";
import CreateResourceHandler from "./types/handler/media/CreateResourceHandler";
import CreatePluginSourceHandler from "./types/handler/plugin/source/CreatePluginSourceHandler";
import CreateHandler from "./types/handler/base/CreateHandler";
import CreatePluginFactoryHandler from "./types/handler/plugin/factory/CreatePluginFactoryHandler";
import CreateScreenHandler from "./types/handler/ui/screen/CreateScreenHandler";

export default class Plugin {
	readonly config: PluginConfig
	/**
	 * key is the handler id
	 */
	private handlers = new Map<string, Handler>()

	private counter = 0
	private loaded = false

	constructor(options: PluginConfig) {
		this.config = options
	}

	/**
	 * Called when plugin is loaded
	 */
	onLoad(callback: () => Promise<void>) {
		this.onLoadCallback = async () => {
			await callback()
			this.loaded = true
		}
	}

	/**
	 * Called when plugin is unloaded
	 */
	onUnload(callback: () => Promise<void>) {
		this.onUnloadCallback = async () => {
			await callback()
			this.loaded = false
		}
	}

	defineHandler(handler: CreateHandler): string {
		const newHandler: Handler = {
			id: `${this.config.id}-custom-${this.counter++}`,
			...handler
		}

		this.handlers.set(newHandler.id, newHandler)
		return newHandler.id
	}

	/**
	 * @see Handler
	 */
	defineResourceHandler(handler: CreateResourceHandler): string {
		const newHandler: ResourceHandler = {
			id: `${this.config.id}-custom-resource-${this.counter++}`,
			name: `${this.config.name}`,
			...handler
		}

		this.handlers.set(newHandler.id, newHandler)
		return newHandler.id
	}

	/**
	 * @see defineResourceHandler
	 */
	defineCatalogHandler(handler: CreateCatalogHandler): string {
		const newHandler: ResourceHandler = {
			id: `${this.config.id}-catalog-${this.counter++}`,
			name: `${this.config.name}`,
			...handler,
			type: 'catalog-request'
		}

		return this.defineResourceHandler(newHandler)
	}

	definePluginSourceHandler(handler: CreatePluginSourceHandler): string {
		const newHandler: Handler = {
			id: `${this.config.id}-plugin-source-${this.counter++}`,
			...handler,
			type: 'plugin-source'
		}

		return this.defineHandler(newHandler)
	}

	definePluginFactoryHandler(handler: CreatePluginFactoryHandler): string {
		const newHandler: Handler = {
			id: `${this.config.id}-plugin-factory-${this.counter++}`,
			...handler,
			type: 'plugin-factory'
		}

		return this.defineHandler(newHandler)
	}

	defineScreenHandler(handler: CreateScreenHandler): string {
		const newHandler: Handler = {
			id: `${this.config.id}-ui-screen-${this.counter++}`,
			...handler,
			type: "ui-screen"
		}

		return this.defineHandler(newHandler)
	}

	// Used internally
	private async getSpec(): Promise<PluginSpec> {
		if (!this.loaded) {
			await this.onLoadCallback()
		}

		return {
			config: this.config,
			handlers: this.handlers,
			onLoad: this.onLoadCallback,
			onUnload: this.onUnloadCallback
		}
	}

	private onLoadCallback: () => Promise<void> = async () => {
		this.loaded = true
	}

	private onUnloadCallback: () => Promise<void> = async () => {
		this.loaded = false
	}
}