import PluginConfig from "./types/PluginConfig";
import Handler from "./types/handler/base/Handler";
import ResourceHandler from "./types/handler/media/ResourceHandler";
import CreateCatalogHandler from "./types/handler/media/catalog/CreateCatalogHandler";
import PluginSpec from "./types/PluginSpec";
import CreateResourceHandler from "./types/handler/media/CreateResourceHandler";
import CreatePluginSourceHandler from "./types/handler/plugin/source/CreatePluginSourceHandler";
import CreateHandler from "./types/handler/base/CreateHandler";
import CreatePluginFactoryHandler from "./types/handler/plugin/factory/CreatePluginFactoryHandler";

export default class Plugin {
	readonly config: PluginConfig
	private handlers = new Map<string, Handler>()

	private counter = 0
	private loaded = false

	constructor(options: PluginConfig) {
		this.config = options
	}

	/**
	 * Don't define handlers here, they are part of the spec
	 */
	onLoad(callback: () => Promise<void>) {
		this.onLoadCallback = async () => {
			await callback()
			this.loaded = true
		}
	}

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
	 * Defines or overrides if a catalog handler has already been defined, if
	 * you use multiple catalog handlers use `defineMediaHandler` instead
	 * @see defineResourceHandler
	 */
	defineCatalogHandler(handler: CreateCatalogHandler): string {
		const newHandler: ResourceHandler = {
			id: `${this.config.id}-catalog`,
			name: `${this.config.name}`,
			...handler,
			type: 'catalog-request'
		}

		return this.defineResourceHandler(newHandler)
	}

	definePluginSourceHandler(handler: CreatePluginSourceHandler): string {
		const newHandler: Handler = {
			id: `${this.config.id}-plugin-source`,
			...handler,
			type: 'plugin-source'
		}

		return this.defineHandler(newHandler)
	}

	definePluginFactoryHandler(handler: CreatePluginFactoryHandler): string {
		const newHandler: Handler = {
			id: `${this.config.id}-plugin-factory`,
			...handler,
			type: 'plugin-factory'
		}

		return this.defineHandler(newHandler)
	}

	// Used internally, private since its internal api
	// noinspection JSUnusedLocalSymbols
	private getSpec(): PluginSpec {
		if (!this.loaded) {
			throw Error("The plugin must be loaded before getting it's spec")
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
