import PluginConfig from "./types/PluginConfig"
import Handler from "./types/handler/base/Handler"
import ResourceHandler from "./types/handler/media/ResourceHandler"
import CreateCatalogHandler from "./types/handler/media/catalog/CreateCatalogHandler"
import PluginSpec from "./types/PluginSpec"
import CreateResourceHandler from "./types/handler/media/CreateResourceHandler"
import CreatePluginSourceHandler from "./types/handler/plugin/source/CreatePluginSourceHandler"
import CreateHandler from "./types/handler/base/CreateHandler"
import CreatePluginFactoryHandler from "./types/handler/plugin/factory/CreatePluginFactoryHandler"
import AppApi from "./AppApi"
import CreateScreenHandler from "./types/handler/ui/screen/CreateScreenHandler"
import CreateMetaHandler from "./types/handler/media/meta/CreateMetaHandler"
import CreateHandlerDecorator from "./types/handler/decorator/CreateHandlerDecorator"
import HandlerType from "./types/handler/base/HandlerType"
import HandlerDecoratorArgs from "./types/handler/decorator/HandlerDecoratorArgs"
import HandlerDecoratorResponse from "./types/handler/decorator/HandlerDecoratorResponse"

export default class Plugin {
	readonly config: PluginConfig
	app: AppApi = {} as any // Stub, set before onLoad
	/**
	 * key is the handler id
	 */
	protected handlers = new Map<string, Handler>()

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
			...handler,
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
			...handler,
		}

		this.handlers.set(newHandler.id, newHandler)
		return newHandler.id
	}

	/**
	 * @see defineResourceHandler
	 */
	defineCatalogHandler(handler: CreateCatalogHandler): string {
		const type: HandlerType = "catalog"

		const newHandler: ResourceHandler = {
			id: `${this.config.id}-${type}-${this.counter++}`,
			name: `${this.config.name}`,
			...handler,
			type: type,
		}

		return this.defineResourceHandler(newHandler)
	}

	/**
	 * @see defineResourceHandler
	 */
	defineMetaHandler(handler: CreateMetaHandler): string {
		const type: HandlerType = "meta"

		const newHandler: ResourceHandler = {
			id: `${this.config.id}-${type}-${this.counter++}`,
			name: `${this.config.name}`,
			...handler,
			type: type,
		}

		return this.defineResourceHandler(newHandler)
	}

	definePluginSourceHandler(handler: CreatePluginSourceHandler): string {
		const type: HandlerType = "plugin-source"

		const newHandler: Handler = {
			id: `${this.config.id}-${type}-${this.counter++}`,
			...handler,
			type: type,
		}

		return this.defineHandler(newHandler)
	}

	definePluginFactoryHandler(handler: CreatePluginFactoryHandler): string {
		const type: HandlerType = "plugin-factory"

		const newHandler: Handler = {
			id: `${this.config.id}-${type}-${this.counter++}`,
			...handler,
			type: type,
		}

		return this.defineHandler(newHandler)
	}

	defineScreenHandler(handler: CreateScreenHandler): string {
		const type: HandlerType = "ui-screen"

		const newHandler: Handler = {
			id: `${this.config.id}-${type}-${this.counter++}`,
			...handler,
			type: type,
			callback: handler.callback as unknown as (
				args: any,
			) => Promise<any>,
		}

		return this.defineHandler(newHandler)
	}

   // Should only be enabled in dev mode 
	private handlerDecoratorCallbackVerifier(
		callback: (
			args: HandlerDecoratorArgs,
		) => Promise<HandlerDecoratorResponse>,
	): (args: HandlerDecoratorArgs) => Promise<HandlerDecoratorResponse> {
		return async (
			args: HandlerDecoratorArgs,
		): Promise<HandlerDecoratorResponse> => {
			const result = await callback(args)

			if (
				result.handler.id !== args.handler.id ||
				result.handler.type !== args.handler.type
			) {
				throw new Error(
					`Handler decorator returned invalid result, undecorated with id ${args.handler.id} and type ${args.handler.type} decorated to id ${result.handler.id} and type ${result.handler.type}`,
				)
			}

			return result
		}
	}

	defineHandlerDecorator(handler: CreateHandlerDecorator): string {
		const type: HandlerType = "decorator"

		const newHandler: Handler = {
			id: `${this.config.id}-${type}-${this.counter++}`,
			...handler,
			type: type,
         callback: this.handlerDecoratorCallbackVerifier(handler.callback)
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
			onUnload: this.onUnloadCallback,
		}
	}

	private onLoadCallback: () => Promise<void> = async () => {
		this.loaded = true
	}

	private onUnloadCallback: () => Promise<void> = async () => {
		this.loaded = false
	}
}
